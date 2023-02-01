const app = Vue.createApp({
    data() {
        return {
            skills: [
                {name:"html",experience:6},
                {name:"css",experience:12},
                {name:"js",experience:3},
            ],
            newSkill: { name:"", experience:0}
        };
    },

    methods: {
        addSkill(){
            this.skills.push(this.newSkill);
            this.newSkill={};
        },
        removeSkill(i){
            this.skills.splice(i,1);
        }
    }
});
app.mount("#app");