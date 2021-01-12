import store from "./store.js"

const app = new Vue({
    el: '#app',
    data() {
        return {
            holis: store
        }
    },
    mounted () {
        const mc = new Hammer(this.el)
        mc.on('panleft panright tap press', (ev) => {
            alert("holissss")
        })
    },
    template:`
        <b-container fluid>
            <nav-bar/>
            <sidebar/>
            <h3>{{holis.myApp}}</h3>
            <p>adsajdl
                ksa
                dsadsadsaad
                sajdlksadsadsads
                aadsajdlksadsadsa
                dsaadsajdlksads
                adsadsaadsajdlks
                adsadsadsaadsajd
                lksadsadsadsaad
                sajdlksadsadsad
                saadsajdlksadsa
                dsadsaadsajdlks
                adsadsadsaadsaj
                dlksadsadsadsaad
                sajdlksadsadsads
                aadsajdlksadsad
                dsadsadsaad
                sajdlksadsadsads
                aadsajdlksadsadsa
                dsaadsajdlksads
                adsadsaadsajdlks
                adsadsadsaadsajd
                lksadsadsadsaad
                sajdlksadsadsad
                saadsajdlksadsa
                dsadsaadsajdlks
                adsadsadsaadsaj
                dlksadsadsadsaad
                sajdlksadsadsads
                aadsajdlksadsad
                dsadsadsaad
                sajdlksadsadsads
                aadsajdlksadsadsa
                dsaadsajdlksads
                adsadsaadsajdlks
                adsadsadsaadsajd
                lksadsadsadsaad
                sajdlksadsadsad
                saadsajdlksadsa
                dsadsaadsajdlks
                adsadsadsaadsaj
                dlksadsadsadsaad
                sajdlksadsadsads
                aadsajdlksadsad
                dsadsadsaad
                sajdlksadsadsads
                aadsajdlksadsadsa
                dsaadsajdlksads
                adsadsaadsajdlks
                adsadsadsaadsajd
                lksadsadsadsaad
                sajdlksadsadsad
                saadsajdlksadsa
                dsadsaadsajdlks
                adsadsadsaadsaj
                dlksadsadsadsaad
                sajdlksadsadsads
                aadsajdlksadsad
                sadsaadsajdlksa
                dsadsadsaadsajd
                lksadsadsadsaads
                ajdlksadsadsadsa
                adsadsadsaadsaj
                dlksadsadsadsaad
                sajdlksadsadsads
                aadsajdlksadsad
                sadsaadsajdlksa
                dsadsadsaadsajd
                lksadsadsadsaads
                ajdlksadsadsadsa
                adsadsadsaadsaj
                dlksadsadsadsaad
                sajdlksadsadsads
                aadsajdlksadsad
                sadsaadsajdlksa
                dsadsadsaadsajd
                lksadsadsadsaads
                ajdlksadsadsadsa
                adsajdlksadsadsa
                dsaadsajdlksadsa
                dsadsaadsajdlksa
                dsadsadsa</p>
        </b-container>
    `
})