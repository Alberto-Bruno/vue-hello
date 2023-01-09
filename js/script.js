console.log('Vue OK', Vue);

const app = Vue.createApp({
  data() {
    return {
        message: 'Hello Vuejs!',
            image: './img/logo-vue.jpg'
    }
  },
});

app.mount("#root");