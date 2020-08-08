// crear los años
const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max - 11;

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function obtenerAutos() {
    return [{
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A4',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A6',
            year: 2010,
            precio: 35000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2019,
            precio: 80000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A3',
            year: 2017,
            precio: 55000,
            puertas: 2,
            color: 'Negro',
            transmision: 'manual'
        },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2017,
            precio: 60000,
            puertas: 2,
            color: 'Negro',
            transmision: 'manual'
        },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Audi',
            modelo: 'A4',
            year: 2016,
            precio: 30000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        }
    ];
}

//? Datos para la busqueda
let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


const autos = obtenerAutos();

//Event Listener DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

});

// Event Listeners para el formulario

const marca = document.querySelector('#marca');
marca.addEventListener('input', (e) => {
    // console.log(e.target.value);
    datosBusqueda.marca = e.target.value;

    //llamada a la funcion de filtrar Autos
    filtrarAuto();

});

const year = document.querySelector('#year');
year.addEventListener('input', (e) => {
    // console.log(e.target.value);
    datosBusqueda.year = Number(e.target.value);

    //llamada a la funcion de filtrar Autos
    filtrarAuto();

});

const minimo = document.querySelector('#minimo');
minimo.addEventListener('input', (e) => {
    // console.log(e.target.value);
    datosBusqueda.minimo = Number(e.target.value);

    //llamada a la funcion de filtrar Autos
    filtrarAuto();

});

const maximo = document.querySelector('#maximo');
maximo.addEventListener('input', (e) => {
    // console.log(e.target.value);
    datosBusqueda.maximo = Number(e.target.value);

    //llamada a la funcion de filtrar Autos
    filtrarAuto();

});

const puertas = document.querySelector('#puertas');
puertas.addEventListener('input', e => {
    datosBusqueda.puertas = Number(e.target.value);

    filtrarAuto()
});

const transmision = document.querySelector('#transmision');
transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

const color = document.querySelector('#color');
color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
})

//Limpiar resultados anteriores
function limpiarHTML() {
    //capturar  div 'resultado'
    const contenedor = document.querySelector('#resultado');

    while (contenedor.firstChild) { //obtiene el primer nodo, si existe, y lo borra
        contenedor.removeChild(contenedor.firstChild);

    }
}



//*toma un array y los muestra en el html
function mostrarAutos(autos) {

    limpiarHTML();
    //Contruccion del html de los autos
    const contenedor = document.querySelector('#resultado');
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `

            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>

        `;
        contenedor.appendChild(autoHTML);
    });

}

//*Genera alert de no hay resultados para la busqueda

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');

    noResultado.classList.add('alerta', 'error');

    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarAuto() {
    const resultado = obtenerAutos()
        .filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor);
    // console.log(resultado);
    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}



//FILTROS (High order functions)

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
        // return datosBusqueda.marca === auto.marca;

    } else {
        return auto;
    }
}

function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
        // return datosBusqueda.marca === auto.marca;

    } else {
        return auto;
    }
}

function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    } else {
        return auto;
    }
}

function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
    } else {
        return auto;
    }
}

function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    } else {
        return auto;
    }
}

function filtrarTransmision(auto) {

    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    } else {
        return auto;
    }

}

function filtrarColor(auto) {

    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    } else {
        return auto;
    }

}