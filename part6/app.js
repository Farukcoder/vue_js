const app = Vue.createApp({
    data() {
        return {
            count: 0
        };
    },

    methods: {
        increment(per) {
            this.count = this.count + per;
        },
        decrement(per) {
            this.count = this.count - per;
        },
        test(evt, ev) {
            console.log(ev);
            console.log(evt);
        }
    }
});
app.mount("#app");