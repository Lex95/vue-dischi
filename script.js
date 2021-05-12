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
                return this.albumList
            } else {
                const result = [];
                this.albumList.forEach(element => {
                    if (element.genre == this.selectedGenre) {
                        result.push(element)
                    }
                })
                return result
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