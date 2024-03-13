const {createApp} = Vue;

createApp({

    data(){
        return {
            newTask: '',
            todoDone: false,
            todoList: []
 
        }
    },

    methods:{
        addTask(){
            console.log('add');
        }
       
        
    },
    mounted(){
        
      }

}).mount('#app');