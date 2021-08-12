let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');
});

//miPromesa.then( valor => console.log(valor), error => console.log(error));
//miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error));

let promesa = new Promise((resolver) => {
    //console.log('inicio promesa');
    setTimeout(() => resolver('saludos con promesa y timeout'), 3000);
    //console.log('fin promesa');
});

//promesa.then(valor => console.log(valor));

//async indica que una función regresa una promesa
async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}

// miFuncionConPromesa().then(valor => console.log(valor));

//async con await

async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver("Promesa con await");
    });
    console.log(await miPromesa);
}

// funcionConPromesaYAwait();

//promesas,await,async y setTimeout

async function funcionConPromesaAwaitTimeout() {
    let miPromesa1 = new Promise(resolver => {
        console.log("inicio de la funcion");
        setTimeout(() => resolver("Promesa con await y timeout"), 3000);
    });
    console.log(await miPromesa1);
    console.log("fin la de la promesa");
}


funcionConPromesaAwaitTimeout();