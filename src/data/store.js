import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({

    BaseApiUrl:"http://127.0.0.1:8000/api/",
    DevApi:"apiDeveloper",
    ListDev:[],
    Loading: false,
    LoadingError:false,
    FilterText:"",

    /**Funzione di richiamo */
    getDev(){
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
    }
});