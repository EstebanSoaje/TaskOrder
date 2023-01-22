/*
Prioridades:

P_0 EMERGENCIA:
    Intervencion inmediata, se suspende la tarea actual para gestionar la emergencia.

P_1 URGENCIA:
    No requiere suspender la tarea actual, pero ni bien se finalice la tarea y no haya otra EMERGENCIA, debe ser atendida.

P_2 ALARMA:
    La intervencion es necesaria para evitar consecuencias a futuro.

P_3 ALERTA:
    Se identifica el problema pero su solucion puede esperar hasta que se deba intervenir tareas realacionadas.

P_4 SEGUIMIENTO:
    No es necesario intervenir, pero se debe identificar la causa para tambien estimar su prioridad, se debe ver como evoluciona.

P_5 LEVE:
    El evento ya ha ocurrido, con consecuencias muy leves, se recurre a la espera de recursos suficientes para dedicarle tiempo a solucionarlo.

*/

/*
Priorizacion:
    Se debe establecer un algoritmo para evitar subjetividad del individuo que lo reporta.

    Para la creación de ese criterio:

    Gravedad potencia:
        Puede provocar problemas a futuro, se estima su gravedad a futuro

    Tendencia o tiempo en el que va a empeorar:
        1- No empeora con el tiempo.
        2- Empeora levemente.
        3- Empeora rapidamente.
        4- Se encuentra en su peor estado.

    Urgencia:
        Segun solicitud de cliente para cuando lo necesita (por ejemplo delicado con caracter legal)

*/

/*
PREGUNTAS:

    -Que importancia o gravedad tiene?
    -Que plazo de entrega existe para resolverla?
    -Que sucede si no se atiende?
    -Cuanto demanda aprox. solucionarlo?
    -Disponemos de los recursos?

*/

/*
Lógica:

Puntaje Total = Gravedad x Urgencia x Tendencia

*/

/*
Gestion de tareas
Importante y urgente:
- incidencias fuertes
- problemas con clientes clave (vips)
- problemas que impliquen dinero
- problemas legales

Importantes:
- Proyectos trimestrales
- 

Urgentes:
- incidencias 
- procesos administrativos
- consultas o comentarios

Desechables:
- Proyectos fuera de foco
- 

*/
const $select = document.querySelector("#clientes");



const opcionCambiada = () => {
    console.log("Cambio");
};

$select.addEventListener("change", opcionCambiada);

const agregar = () => {
    const option = document.createElement('option');
    option.value = document.getElementById("numeroCliente");
    option.text = document.getElementById("nombreCliente");
    $select.appendChild(option);
};

const limpiar = () => {
    for (let i = $select.options.length; i >= 0; i--) {
        $select.remove(i);
    }
};

const mostrar = () => {
    const indice = $select.selectedIndex;
    if (indice === -1) return; // Esto es cuando no hay elementos
    const opcionSeleccionada = $select.options[indice];
    alert(`Texto: ${opcionSeleccionada.text}. Valor: ${opcionSeleccionada.value}`);
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#btnAgregar").addEventListener("click", agregar);
    document.querySelector("#btnLimpiar").addEventListener("click", limpiar);
    document.querySelector("#btnMostrar").addEventListener("click", mostrar);
});



class Tarea {
    constructor(titulo, fechaEntrega, prioridad, cliente) {
        this.titulo = titulo;
        this.fechaEntrega = fechaEntrega;
        this.prioridad = prioridad;
        this.cliente = cliente;
    }
}

class Cliente {
    nombre = String;
    esVip = Boolean;
}

function agregarTarea() {
    let tarea = new Tarea(document.getElementById("taskImput"), document.getElementById("fechaEntrega"), establecerPrioridad(), document.getElementById("cliente"))
}

function establecerPrioridad() {
    //toma los datos marcados en el formulario y define un puntaje para la tarea
    let puntaje = 1;
    return puntaje;
}

