<script>
import { store } from '../data/store';


export default {
    name: "AppText",
    components: {
    },
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    mounted() {
        store.getDevs();
    },
}
</script>

<template>
    <div class="testoContainer">
        <div class="row gap-5 justify-content-center flex-wrap align-items-center px-2 mx-2">
            <div class="col-12 col-sm-5 p-2 h-100 p-5 coverGlass">
                <div >
                    <h4 class="fw-bold">
                        Trova il Developer Giusto per il Tuo Progetto
                    </h4>
                    <p >
                        Sei alla ricerca di un developer con competenze specifiche in vari linguaggi di programmazione?
                        Siamo qui per aiutarti! Il nostro servizio ti consente di connetterti con sviluppatori esperti in
                        una vasta gamma di linguaggi, dal <span class="text-warning">JavaScript</span> al <span
                            class="text-primary">Python</span>, passando per il <span class="text-danger">Java</span> e
                        molti altri. Trova il
                        partner perfetto per il tuo progetto oggi stesso.
                    </p>
                </div>
            </div>
            <div class="col-12 col-sm-5 h-100 p-5  coverGlass p-2">
                <h4 class="fw-bold">
                    Sviluppatori Talentuosi
                </h4>
                <p>
                    La diversità è la chiave per l'innovazione. Su di noi puoi contare per metterti in contatto con una
                    comunità globale di sviluppatori provenienti da ogni angolo del mondo e con competenze linguistiche e
                    culturali diverse. Scegli tra un team di sviluppatori talentuosi e multilingue per portare il tuo
                    progetto al successo.
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.testoContainer {
    width: 100%;

}
</style>

