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
            
            if (this.newTask.trim() === '') {
                return; // Per non far aggiungere task vuoti
            }

            // Aggiungo nell'array all'array todoList un nuovo oggetto con la proprietà 'text' e 'done'
            this.todoList.push({ text: this.newTask, todoDone: false }); 
            this.newTask = ''; // Resettare l'input     
        }
       
        
    },
    mounted(){
        
      }

}).mount('#app');