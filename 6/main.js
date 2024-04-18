var app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        currentTime() {
            return new Date();
        },
        increase() {
            this.count++
        },
        decrease() {
            if (this.count >= 1)
                this.count--
        },
        getEvent(e) {
            console.log(e)
        }
    }
})

app.mount('#app')