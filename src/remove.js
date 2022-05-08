export {removeSomething};

//you need to input class or id
const removeSomething = (something) => {
    if (something) {
    let del = document.querySelectorAll(something);
    del.forEach(d => d.remove());}
    else console.log("Remove Something doesn't work");
}

// const removeEverything = () => {
//     let projectButton = document.querySelector('.projectButton')
//     let projectText = document.querySelector('.projectText')
//     let projects = document.querySelectorAll('.project')
//     let todos = document.querySelectorAll('.todo');
//     let projectsDiv = document.querySelector('.projectsDiv')
//     let ptitle = document.querySelector('.ptitle')
//     let addTodoButt = document.querySelector('.addTodoButt')
//     let chooseDiv = document.querySelector('.chooseDiv')
//     todos.forEach(todo => {
//         todo.remove();
//     });
//     if (projectText !== null) projectText.remove();
//     if (projectButton !== null) projectButton.remove();
//     if (projects !== null) projects.forEach(p => p.remove())
//     if (projectsDiv !== null) projectsDiv.remove();
//     if (ptitle !== null) ptitle.remove();
//     if (addTodoButt !== null) addTodoButt.remove();
//     if (chooseDiv!==null) chooseDiv.remove();
// }