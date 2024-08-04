const body = document.body;

//Título con DOM
let titulo = document.getElementById('titulo')
titulo.innerText = "Calculadora de índice de masa corporal (IMC)"

//Clases añadidas con DOM
titulo.classList.add("titulo")
header.classList.add("header")
seccion.classList.add("seccion")
formulario.classList.add("form")

//Botón de form
let boton = document.getElementById('boton');
boton.innerText = "CALCULAR"

let historial = document.getElementById('historial')


//EVENTOS  formulario
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    let PesoIngresado = parseFloat(document.getElementById('inputPeso').value);
    let AlturaIngresadaCm = parseFloat(document.getElementById('inputAltura').value);

    let AlturaIngresadaM = AlturaIngresadaCm / 100;

    if (isNaN(PesoIngresado) || isNaN(AlturaIngresadaCm)) {
        alert(`Por favor, ingrese un numero válido`)
    } else {
        let IMC = PesoIngresado / (AlturaIngresadaM * AlturaIngresadaM)

        let resultado = document.getElementById('resultadoIMC');
        resultado.innerHTML = ' ';

        if (isNaN(IMC)) {
            alert('Por favor, ingrese un numero válido');
            return;
        }
        if (IMC > 150 || IMC <= 0) {
            alert('Ingrese datos válido');
            explicacion.textContent = '';
        }
        //Respuesta
        let parrafo = document.createElement('p');
        parrafo.textContent = `Tu indice de masa corporal es ${IMC.toFixed(1)}`
        parrafo.classList.add('results')
        resultado.appendChild(parrafo);
        this.reset();

        resultado.classList.remove('resultado-oculto');
        resultado.classList.add('resultado-visible');

        let explicacion = document.createElement('p')

        resultado.appendChild(explicacion);

        //Session storage
        sessionStorage.setItem("ResultadoHistorial", IMC.toFixed(1));

        let ImcAlmacenado = sessionStorage.getItem("ResultadoHistorial")

        if (ImcAlmacenado) {
            let historialIMC = document.getElementById('historial');
            historial.innerHTML = `Tu último IMC calculado fue ${ImcAlmacenado}`
            historial.classList.remove('resultado-oculto');
            historial.classList.add('resultado-visible');
        }

        //IMPLEMENTACION DE TERNARIOS.
        
            //USO DE FETCH
            fetch('../data/datos.json')
                .then (response => response.json())
                .then (data => showInfo(data));
                
            function showInfo(data){
                explicacion.textContent =
            (IMC <= 18.5) ? `La recomendación es ${bajoPeso.recomendacion}` :
            (IMC > 18.5 && IMC <= 24.9) ? `Está en un buen peso, ${buenPeso.recomendacion}` :
            (IMC > 24.9 && IMC <= 29.9) ? `${sobrePeso.recomendacion}` :
            (IMC > 29.9 && IMC <= 39.9) ? `Es escencial ${Obeso.recomendacion}` :
            (IMC > 39.9 && IMC <= 150) ? `${obesidadExtrema.recomendacion}` : '';
            }
            
    }
});

