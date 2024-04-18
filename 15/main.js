var app = Vue.createApp({
    data() {
        return {
            skillName : '',
            skills: [
                {
                    name: 'Vue.js',
                    experience: 20
                },
                {
                    name: 'React.js',
                    experience: 5
                },
                {
                    name: 'Angular.js',
                    experience: 15
                }
            ]
        }
    },
    computed :{
      getExperiencedSkills(){
          return this.skills.filter(item => {
              return item.experience >= 5
          })
      }
    },
    methods: {
        addSkill() {
            this.skills.push({
                name: this.skillName,
                experience: 1
            })
            this.skillName = ''
            console.log(this.skills)
        },
        removeSkill(index) {
            this.skills.splice(index, 1)
        }
    },

})

app.mount('#app')