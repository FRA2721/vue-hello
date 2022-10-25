// dev: Francesco Cimino;
// proj: Vue Hello;
// lang: js;

const {createApp} = Vue;

createApp({
    data(){
        return {
            text : "Hello World!",
            logo : "img/youtube.png"
        }
    }
}).mount("#root");
