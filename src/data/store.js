import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({

    BaseApiUrl:"http://127.0.0.1:8000/api/",
    DevApi:"apiDeveloper",
    DevApiPages:"apiDeveloperPages",
    ListDev:[],
    Loading: false,
    LoadingError:false,
    devsCurrentPage: 0,
    devsTotalPages: 0,
    FilterText:"",

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
                
                this.ListDev = r.data.results.data; // paginate
                this.devsCurrentPage = r.data.results.current_page;
                this.devsTotalPages = r.data.results.last_page;
                console.log(this.ListDev);
                this.Loading = false

            })
            .catch(err => { 

                this.Loading = false;
                this.LoadingError = "Errore nel caricamento " + err.message;

            })

        }

    }
    
    
});