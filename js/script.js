console.log(Vue);

const { createApp } = Vue;
const app = createApp({
    name: 'ToDo List',
    data: () => ({
        prova: 'prova Vue',
        tasks: [
            { id: 1, done: false, text: 'Fare la spesa' },
            { id: 2, done: true, text: 'Lavare i capelli' },
            { id: 3, done: false, text: 'Comprare una marca da bollo' },
            { id: 4, done: false, text: 'Aggiornare il PC' }
        ],
        newTaskText: '',
        searchText: ''
    }),
    computed: {
        filteredTasks() {
            const search = this.searchText.toLowerCase()
            const filteredArray = this.tasks.filter(task => task.text.toLowerCase().includes(search));
            return filteredArray;
        },
    },
    methods: {
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id);
            // const filteredTasks = this.tasks.filter(task => {
            //     if (task.id !== id) return true;
            //     else return false;
            // })
            // this.tasks = filteredTasks;
        },
        createNewTask(text) {
            // const newID = new Date()
            const task = {
                id: new Date().toISOString(),
                done: false,
                text: text
            };
            this.tasks.push(task);
            this.newTaskText = '';
        },
        searchTask(text) {
            this.task
        }
    }
});
app.mount('#root');