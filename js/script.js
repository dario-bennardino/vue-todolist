const {createApp} = Vue;

createApp({

    data(){
        return {
            newTask: '',
            
            todoList: [
                {
                    task: "Fare la spesa", 
                    todoDone: true,
                },
                {
                    task: "Fare la spesa", 
                    todoDone: false,
                },
                {
                    task: "Fare la spesa", 
                    todoDone: false,
                },
                {
                    task: "Fare la spesa", 
                    todoDone: false,
                },
                {
                    task: "Fare la spesa", 
                    todoDone: false,
                }
            ]
 
        }
    },

    methods:{
        addTask(){
            
            if (this.newTask.trim() === '') {
                return; // Per non far aggiungere task vuoti
            }

            // Aggiungo nell'array all'array todoList un nuovo oggetto con la proprietà 'text' e 'done'
            this.todoList.push({ task: this.newTask, todoDone: false }); 

            // Resettare l'input 
            this.newTask = '';     
        },

        removeTask(index) {
            this.todoList.splice(index, 1);
          }
       
        
    },
    mounted(){
        
      }

}).mount('#app');