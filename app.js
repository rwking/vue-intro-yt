const app = Vue.createApp({
    
    /*html*/
    template: `
    <h2> My favorite book: </h2>
    <div v-if="showBooks">
    <p>    {{ name + '-' + author + '-' + age }} </p>
    </div>
    <p>
        <button @click="age++">Increase age</button>
        <button @click="age--">Decrease age</button>
    </p>
    <div @click="changeTitle">Change title</div>
    <p>
    <button @click="toggleShowBooks ">
        <span v-if="!showBooks">Show boooks</span>
        <span v-else>Hide boooks</span>
    </button>

    <div v-show="showBooks">Currently showing books</div>
    `,


    data() {
        return {
            showBooks: true,
            name: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 12,
        }
    },
    methods: {
        changeTitle() {
            this.name = 'The Empire Strikes Back'
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }

}) 

app.mount('#app')

