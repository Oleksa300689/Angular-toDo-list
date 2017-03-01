angular.module("Controllers", [])

.controller('mainCtrl', mainCtrl)

function mainCtrl(){
    
    this.tasks = {
        user: "Oleksiy",
        userTasks: [
            {
                name: "Learn JavaScript!",
                done: false
            },
            {
                name: "Learn Angular!",
                done: false
            },
            {
                name: "Go to sleep!",
                done: false
            },
            {
                name: "Drink coffe!",
                done: false
            }
        ]
    }
    
    this.addTask = function(taskName){
        this.tasks.userTasks.push({
            name: taskName,
            done: false
        })
        document.querySelector(".form-control").value = "";
    }
    
    this.deleteTask = function(key){
        this.tasks.userTasks.splice(key,1)
    }
    
    this.editMenu = false;
    this.editTask = function(key){
        this.editMenu = !this.editMenu;
        this.edited = this.tasks.userTasks[key].name;
    
    this.saveTask = function(){
        this.tasks.userTasks[key].name = this.edited;
        document.querySelector(".edit").value = "";
        this.editMenu = !this.editMenu;
    }
    }
    
    this.checkboxModel = function(key){
        this.tasks.userTasks[key].done = !this.tasks.userTasks[key].done
        
    }
     
}