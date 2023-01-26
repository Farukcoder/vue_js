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

        }
    }
});
app.mount("#app");