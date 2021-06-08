const app = new Vue({

    el: '#app',

    data:{
        query: '',
        url: 'https://api.themoviedb.org/3/search/movie',
        apiKey: '03b14c3f1711a74b228ce8ae961435d6',
        language: 'it-IT',
    },

    methods: {

        searchFilm(){
            let fullUrl = `${this.url}?api_key=${this.apiKey}&language=${this.language}&query=${this.query}`
            console.log(fullUrl);
            axios.get(fullUrl)
            .then(resp => {
                console.log(resp.data);
            }).catch(e => {
                console.error(e);
            });
        }
    },

    mounted(){

    }
});


// https://api.themoviedb.org/3/search/movie?api_key=03b14c3f1711a74b228ce8ae961435d6&language=it-IT&query=ritorno al futuro&page=1