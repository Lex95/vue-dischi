const app = new Vue({
    el: "#app",
    data: {
        albumList: [],
        genresList: [],
        selectedGenre: "all",
    },
    computed: {
        selectedAlbums() {
            if (this.selectedGenre == "all") {
                return this.albumList.sort((a, b) => (a.year > b.year) ? -1 : 1)
            } else {
                const result = [];
                // potevo usare un filter
                this.albumList.forEach(element => {
                    if (element.genre == this.selectedGenre) {
                        result.push(element)
                    }
                })
                return result.sort((a, b) => (a.year > b.year) ? -1 : 1)
            }
        }
    },
    methods: {
        getAlbums() {
            axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((resp) => {
                this.albumList = resp.data.response
            })
        },
        getGenres() {
            this.albumList.forEach(element => {
                if (!this.genresList.includes(element.genre)) {
                    this.genresList.push(element.genre)
                }
            });
        }
    },
    mounted() {
        this.getAlbums();
    }
})