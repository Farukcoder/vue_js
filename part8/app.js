const app = Vue.createApp({
    data() {
        return {
            num: "",
            result: ""
        };
    },

    methods: {
        // handelInput(e) {
        //     this.num = e.target.value;
        // },
        getDobule() {
            this.result = this.num * 2;
        },
        getSqure() {
            this.result = this.num * this.num;
        },
        add10() {
            this.result = this.num + 10;
        },
        reset() {
            this.num = "";
            this.result = "";
        }
    }
});
app.mount("#app");