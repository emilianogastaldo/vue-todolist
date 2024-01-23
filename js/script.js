console.log(Vue);

const { createApp } = Vue;
const app = createApp({
    name: 'ToDo List',
    data: () => ({
        prova: 'prova VderrerE'
    })

});
app.mount('#root');