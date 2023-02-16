const readLine = require('readline-sync')

let toDoList = []

function menu() {
    console.log("----------- To do List -----------")
    console.log("1 - Adicionar tarefa")
    console.log("2 - Listar tarefas")
    console.log("3 - Marcar tarefa como concluída")
    console.log("4 - Remover tarefa")
    console.log("5 - Sair")
}

function menuShow() {
    menu()

    let choice = readLine.question("Escolha uma opcao: ")

    if (choice >= 0 && choice < 6) {
        return choice
    } else {
        console.log("Opcao invalida!\n")
        menuShow()
    }
}

function addTask() {
    const task = readLine.question("Digite a nova tarefa: ")
    if (task.trim() != '') {
        toDoList.push({
            name: task,
            status: "Incompleta"
        })
        console.log("Tarefa adicionada com sucesso!\n")
    } else {
        console.log("Não é possível criar uma tarefa vazia!\n")
        addTask()
    }
}

function listTasks() {
    if (toDoList.length === 0) {
        console.log("A lista de tarefas está vazia.\n")
    } else {
        console.log("Lista de tarefas:")
        toDoList.forEach((task, index) => console.log(`${index+1} - ${task.name} (${task.status})`))
        console.log()
    }
}

function completeTask() {
    const index = readLine.question("Digite o numero da tarefa concluida: ")
    if (index <= 0 || index > toDoList.length) {
        console.log("Número de tarefa inválido!\n")
    } else {
        toDoList[index-1] = {
            name: toDoList[index-1].name,
            status: "Completa"
        }
        console.log("Tarefa concluída com sucesso!\n")
    }
}

function removeTask() {
    const index = readLine.question("Digite o numero da tarefa que deseja remover: ")
    if (index <= 0 || index > toDoList.length) {
        console.log("Número de tarefa inválido!\n")
    } else {
        toDoList.splice(index-1, 1)
        console.log("Tarefa removida com sucesso!\n")
    }
}

let option

while (option !== 5) {
    option = Number(menuShow())

    switch (option) {
        case 1:
            addTask()
            break
        case 2:
            listTasks()
            break
        case 3:
            completeTask()
            break
        case 4:
            removeTask()
            break
        case 5:
            console.log("Encerrando aplicação...")
            process.exit()
            break
    }
}