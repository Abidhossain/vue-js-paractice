var app = Vue.createApp({
    data() {
        return {
            skillName : '',
            skills : [
                'Vue.js',
                'React.js',
                'Angular.js'
            ]
        }
    },
    methods: {
        addSkill(){
            this.skills.push(this.skillName)
            //order the array
            this.skills.sort()
            this.skillName = ''
            console.log(this.skills)
        }
    }
})

app.mount('#app')