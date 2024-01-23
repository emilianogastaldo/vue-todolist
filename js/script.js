console.log(Vue);

const { createApp } = Vue;
const app = createApp({
    name: 'ToDo List',
    data: () => ({
        prova: 'prova VderrerE',
        tasks: [
            { id: 1, done: false, text: 'Fare la spesa' },
            { id: 2, done: true, text: 'Lavare i capelli' },
            { id: 3, done: false, text: 'Comprare una marca da bollo' },
            { id: 4, done: false, text: 'Aggiornare il PC' }
        ]
    }),
    methods: {
        deleteTask(id) {
            const filteredTasks = this.tasks.filter(task => {
                if (task.id !== id) return true;
                else return false;
            })
            this.tasks = filteredTasks;
        }
    }
});
app.mount('#root');