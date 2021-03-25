function changeMonth() {
    console.log("Hola");

    let selector = document.getElementById("mes-selector");
    let eventos = document.getElementById("eventos");
    let calendario = document.getElementById("imagen-calendario");

    if (selector.value == 3) { // Marzo
        // Actualizamos lista
        eventos.innerHTML = "<div class='evento'><h4>ChidoriCon</h4><p>11 de Marzo 2021</p><p>Centro de convenciones Zacatecas</p></div>";
        eventos.innerHTML += "<div class='evento'><h4>Mole Comic Con</h4><p>16 de Marzo 2021</p><p>Hipódromo de las Américas, CDMX</p></div>";
        eventos.innerHTML += "<div class='evento'><h4>Dual City</h4><p>26 de Marzo 2021</p><p>Complejo Cultural Universitario, Puebla</p></div>";
        eventos.innerHTML += "<div class='evento'><h4>Dual City</h4><p>27 de Marzo 2021</p><p>Complejo Cultural Universitario, Puebla</p></div>";
        // Actualizamos calendario
        calendario.src = "imagenes/calendarios/marzo.png";

    } else if (selector.value == 4) { // Abril
        // Actualizamos lista
        eventos.innerHTML = "<div class='evento'><h4>ChidoriCon</h4><p>13 de Abril 2021</p><p>Centro de convenciones Zacatecas</p></div>";
        eventos.innerHTML += "<div class='evento'><h4>Expo Akai</h4><p>14 de Abril 2021</p><p>Centro de convenciones Puebla</p></div>";
        eventos.innerHTML += "<div class='evento'><h4>Dual City</h4><p>29 de Abril 2021</p><p>Complejo Cultural Universitario, Puebla</p></div>";
        eventos.innerHTML += "<div class='evento'><h4>Dual Citu</h4><p>30 de Abril 2021</p><p>Complejo Cultural Universitario, Puebla</p></div>";
        // Actualizamos calendario
        calendario.src = "imagenes/calendarios/abril.png";

    } else if (selector.value == 5) { // Mayo
        // Actualizamos lista
        eventos.innerHTML = "<div class='evento'><h4>ChidoriCon </h4><p>1 de Mayo 2021</p><p>Centro de convenciones Zacatecas</p></div>";
        // Actualizamos calendario
        calendario.src = "imagenes/calendarios/mayo.png";
    }
    else {
        eventos.innerHTML = "";
    }

}

changeMonth();