import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({

    BaseApiUrl: "http://127.0.0.1:8000/api/",
    //chiamata api per visualizzare img caricate da utente
    imgApi: "http://127.0.0.1:8000/storage/",
    DevApi: "apiDeveloper",
    DevApiPages: "apiDeveloperPages",
    Languages: "languages",
    urlMessage: "message", //url per message for post
    urlReview: "review", //url review for post
    urlValutation: "valutation",//url valutation for get
    urlNewValutaion: "postValutation",//url valutation for post
    ListValutation: [],
    ListDev: [],
    ListDevPage: [],
    ListLanguages: [],
    // selectedLanguages: [],
    Loading: false,
    LoadingError: false,
    devsCurrentPage: 0,
    devsTotalPages: 0,
    FilterText: "",
    Dev: [],
    Stars: 5,
    Tempo: false,
    devFiltred: [],
    serchLanguage: [],
    serchAverage: 0,
    serchStars: 0,

    //object for new message
    newComment: {
        user_id: "",
        name: "",
        surname: "",
        email: "",
        text: "",
    },

    //object for review

    newReview: {
        user_id: "",
        date: "",
        name: "",
        email: "",
        review: ""
    },

    //object for valutation

    newValutation: {
        user_id: "",
        valutation_id: "",
    },


    /******************************************* */
    /*****************INIZIO FUNZIONI************* */
    /********************************************** */


    // Funzione di richiamo 
    getDevs() {
        this.Loading = true;

        axios.get(this.BaseApiUrl + this.DevApi)
            .then((r) => {

                this.ListDev = r.data.results;
                //console.log(this.ListDev);
                this.Loading = false;

            })
            .catch(err => {

                this.Loading = false;
                this.LoadingError = "Errore nel caricamento" + err.message;
            }
            )
    },
    // Funzione di richiamo di 4 elementi per pagina
    getDevsPage(pageNumber) {

        if (this.devsCurrentPage == pageNumber) {

        } else {

            let config = {
                params: {
                    page: (pageNumber)
                }
            }

            this.loading = true;

            axios.get(this.BaseApiUrl + this.DevApiPages, config)
                .then(r => {

                    this.ListDevPage = r.data.results.data; // paginate
                    this.devsCurrentPage = r.data.results.current_page;
                    this.devsTotalPages = r.data.results.last_page;
                    // console.log(this.ListDevPage);
                    this.Loading = false

                })
                .catch(err => {

                    this.Loading = false;
                    this.LoadingError = "Errore nel caricamento " + err.message;
                })

        }

    },
    // Funzione di richiamo del singolo user
    getDev(id) {

        this.loading = true;

        axios.get(this.BaseApiUrl + this.DevApi + '/' + id)
            .then(r => {

                this.Dev = r.data.results;
                // console.log(this.Dev);
                this.loading = false;

            })
            .catch(err => {

                this.loading = false;
                this.LoadingError = "Errore nel caricamento " + err.message;

            });

    },


    /*FUNZIONE PER FARE LA MEDIA*/
    average(array) {
        this.Tempo = true;
        let result = 0;
        let lunghezza = 0; // Inizializza lunghezza a 0

        if (array) { // Verifica se l'array è definito
            lunghezza = array.length; // Ottieni la lunghezza solo se l'array è definito

            array.forEach(element => {
                result = this.somma(result, element.valutation);
            });
        }

        let media = lunghezza > 0 ? result / lunghezza : 0; // Calcola la media solo se la lunghezza è maggiore di zero

        this.Tempo = false;

        return Math.round(media);
    },

    // FUNZIONE SOMMA
    somma(num1, num2) {
        return num1 + num2;
    },


    /**Funzione di richiamo linguaggi*/
    getLanguages() {
        this.Loading = true;

        axios.get(this.BaseApiUrl + this.Languages)
            .then((r) => {

                this.ListLanguages = r.data.results;
                //console.log(this.ListLanguages);
                this.Loading = false;

            })
            .catch(err => {

                this.Loading = false;
                this.LoadingError = "Errore nel caricamento" + err.message;
            }
            )
    },

    calculateAverage(valutations) {
        if (valutations.length === 0) {
            return 0; // Evita divisione per zero
        }

        const sum = valutations.reduce((total, valutation) => total + valutation.valutation, 0);
        const average = sum / valutations.length;
        return Math.ceil(average); // Arrotonda la media per eccesso
    },

    devFiltred: [],
    serchLanguage: [],
    serchAverage: 0,
    serchStars: 0,
    //Ricerca avanzata
    serchAdvanced() {
        const selectedLanguages = this.serchLanguage; // Array di linguaggi [javascript, php, python]
        const selectedAverage = this.serchAverage; // Stringa con '>10' oppure '10>50' oppure '>50'
        const selectedStars = Number(this.serchStars); // Numero da 1 a 5
        //console.log(selectedStars);

        // Filtra gli sviluppatori in base ai criteri
        this.devFiltred = this.ListDev.filter(dev => {
            // console.log(dev.programming_languages.map(lang => lang.language));
            const devLinguaggi = dev.programming_languages.map(lang => lang.language);

            // Verifica se almeno uno dei linguaggi selezionati è presente nell'elenco dei linguaggi del developer
            const linguaggioCorrisponde = selectedLanguages.some(linguaggio => devLinguaggi.includes(linguaggio));
            // Verifica se il numero di recensioni dell'utente rientra nell'intervallo selezionato

            const numRecensioni = dev.review.length;
            const recensioniMatched = this.checkRecensioni(selectedAverage, numRecensioni);



            // Verifica se la valutazione media dell'utente rientra nell'intervallo selezionato
            const valutazioneMedia = this.average(dev.valutations);
            const valutazioneMediaMatched = this.checkValutazioneMedia(selectedStars, valutazioneMedia);

            // Restituisci true solo se tutti i criteri sono soddisfatti
            return linguaggioCorrisponde && recensioniMatched && valutazioneMediaMatched;
        });
        //console.log(this.devFiltred);

        // Restituisci l'array dei developers filtrati
        return this.devFiltred;
    },

    checkRecensioni(selectedRange, numRecensioni) {
        if (selectedRange === '<10') {
            return numRecensioni < 10;
        } else if (selectedRange === '10>50') {
            return numRecensioni > 10 && numRecensioni <= 50;
        } else if (selectedRange === '>50') {
            return numRecensioni > 50;
        }
        return true; // Nessun filtro specificato, restituisci true
    },

    checkValutazioneMedia(selectedStars, valutazioneMedia) {
        if (selectedStars >= 1 && selectedStars <= 5) {
            return valutazioneMedia === selectedStars;
        }
        return true; // Nessun filtro specificato o filtro non valido, restituisci true
    },

    //function for post message

    postMessage() {

        this.newComment.user_id = this.Dev.id;

        axios.post(this.BaseApiUrl + this.urlMessage, this.newComment)
            .then((r) => {

                //console.log('chiamata effetuata');
                this.newComment.name = "";
                this.newComment.surname = "";
                this.newComment.email = "";
                this.newComment.text = "";

                alert('messaggio inviato');
            })
            .catch(err => {
                console.log(err.message);
            })
    },

    //function for post review

    postReview() {
        this.newReview.user_id = this.Dev.id;
        this.newReview.date = "1992-10-12 00:00:00";

        axios.post(this.BaseApiUrl + this.urlReview, this.newReview)
            .then((r) => {

                //console.log('chiamata ok');
                this.newReview.name = "";
                this.newReview.email = "";
                this.newReview.review = "";

                alert('recensione inviata');
            })
            .catch(err => {
                console.log(err.message);
            })
    },

    //function richiamo valutation

    getValutation() {
        this.Loading = true;

        axios.get(this.BaseApiUrl + this.urlValutation)
            .then((r) => {

                this.ListValutation = r.data.results;
                //console.log(this.ListValutation);
                this.Loading = false;

            })
            .catch(err => {

                this.Loading = false;
                this.LoadingError = "Errore nel caricamento" + err.message;
            })
    },

    //function post valutation

    postValutation() {

        this.newValutation.user_id = this.Dev.id;

        axios.post(this.BaseApiUrl + this.urlNewValutaion, this.newValutation)
            .then((r) => {

                this.newValutation.valutation_id = "";

                alert('valutazione inviata con successo!');
                // console.log('preso!');
            })
            .catch(err => {
                console.log(err.message);
            })
    }

});