let who = ['mi papa', 'mi mama', 'la sofi', 'don segundo'];
let action = ['rompio', 'quemo', 'perdio', 'comio'];
let what = ['las llaves', 'mi tarea', 'en la calle '];
let when = ['durante la cena', 'en el almuerzo', 'despues del colegio', 'durante la noche', 'despues de las clases'];

function excuses( who, action, what, when){
    let quien = Math.floor(Math.random() * who.length);
    let accion = Math.floor(Math.random() * action.length);
    let que = Math.floor(Math.random() * what.length);
    let cuando = Math.floor(Math.random() * when.length);
    return who[quien] + " " + action[accion] + " " + what[que]+ " " + when[cuando];
}

document.querySelector('#excuse').innerHTML = excuses(who, action, what, when);