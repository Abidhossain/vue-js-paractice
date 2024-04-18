var app = Vue.createApp({
    data(){
        return {
            welcome : 'Welcome to Workpay',
            webLink : 'https://www.myworkpay.com',
            htmlCode : `<button class="btn btn-sm btn-primary">Click me</button>`
        }
    }
})

app.mount('#app')