const app = new Vue({

    el: '#app',

    data:{
        query: '',
        url: 'https://api.themoviedb.org/3/search/',
        apiKey: '03b14c3f1711a74b228ce8ae961435d6',
        language: 'it-IT',
        page: 1,
        filmsList:null,
        category:'',
        
    },

    methods: {

        searchFilm(){

            if(this.category == 'movies'){
                let fullUrl = `${this.url}movie?api_key=${this.apiKey}&language=${this.language}&query=${this.query}&page=${this.page}`;
                console.log(fullUrl);
                this.query = '';
                return this.axiosCall(fullUrl);

            } else if(this.category == 'tvShows'){
                let fullUrl = `${this.url}tv?api_key=${this.apiKey}&language=${this.language}&page=${this.page}&query=${this.query}`;
                this.query = '';
                return this.axiosCall(fullUrl);
            }

            
        },

        axiosCall(url){
            axios.get(url)
                .then(resp => {
                    console.log(resp.data);
                    this.filmsList = resp.data.results;
                    console.log(this.filmsList);
                }).catch(e => {
                    console.error(e);
                });
        },

        clearList(){
            this.filmsList = null;
        }
    },

    mounted(){

    }
});


// https://api.themoviedb.org/3/search/movie?api_key=03b14c3f1711a74b228ce8ae961435d6&language=it-IT&query=ritorno al futuro&page=1