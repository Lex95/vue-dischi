const app = new Vue({
    el: "#app",
    data: {
        albumList: []
    },
    methods: {
        getAlbums() {
            axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((resp) => {
                this.albumList = resp.data.response
            })
        }
    },
    mounted() {
        this.getAlbums();
    }
})