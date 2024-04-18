var app = Vue.createApp({
    data() {
        return {
            name : ''
        }
    },
    methods: {
        handleFormSubmit() {
            console.log('okk');
        }
    }
})

app.mount('#app')