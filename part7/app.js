const app = Vue.createApp({
    data() {
        return {
            name: ""
        };
    },

    methods: {
        hendelKeyup(e) {
            // console.log(e.target.value)
            this.name = e.target.value

        },
        handelFormSubmit() {
            console.log('form submited');
            // e.preventDefault();
        },
        handelCardClick(e) {
            console.log(e);
            console.log("card click");
        },
        handelViewClick(e) {
            console.log(e);
            // e.stopPropagation();
            console.log("view click");
        }
    }
});
app.mount("#app");