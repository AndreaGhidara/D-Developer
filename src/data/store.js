import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({

    BaseApiUrl:"http://127.0.0.1:8000/api/",
    DevApi:"apiDeveloper",
    DevApiPages:"apiDeveloperPages",
    ListDev:[],
    ListDevPage:[],
    Loading: false,
    LoadingError:false,
    devsCurrentPage: 0,
    devsTotalPages: 0,
    FilterText:"",
    Dev: [],
    Stars: 5,
    Tempo: false,

    /**Funzione di richiamo */
    getDevs(){
        this.Loading =true;

        axios.get(this.BaseApiUrl + this.DevApi )
            .then((r) => {
            
                this.ListDev = r.data.results;
                console.log(this.ListDev);
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
                console.log(this.ListDevPage);
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
            console.log(this.Dev);
            this.loading = false;

        })
        .catch(err => {

            this.loading = false;
            this.LoadingError = "Errore nel caricamento " + err.message;

        });

    },

    /*FUNZIONE PER FARE LA MEDIA*/
    average(array){
        this.Tempo = true;
        let result = 0;
        
        let lunghezza = array.length;

        
        array.forEach(element => {
            
            result = this.somma(result, element.valutation);

        });
        
        
        let  media=  result / lunghezza;
        
        this.Tempo = false;

        return Math.round(media);

    },

    // FUNZIONE SOMMA
    somma(num1, num2){
        return  num1 + num2;
    }
});