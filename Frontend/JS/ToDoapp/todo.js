let todo = [];

let target = prompt(`Enter your Targets`);
while (true) {
    if (target == "quit")  {
        console.log(`Exiting To Do App`);
        break;
    }

     if (target == "list") {
        console.log(`-------------`);
        for (task of todo) {
            console.log(task);
        }
        console.log(`-------------`);
    }
    else if (target == "add") {
        let task = prompt(`Enter the task you want to add`);
        todo.push(task);
        console.log("task added");
    }
    
}