const bajoPeso = {
    indice: "Menor a 18.5 IMC",
    recomendacion: "aumentar de peso, se necesita alto consumo de proteinas y carbohidratos, complementados por grasas saludables y minerales." 
}
const buenPeso = {
    indice: "Entre 18.5 y 24.9 IMC",
    recomendacion: "se recomienda mantenerse estable así."
}
const sobrePeso = {
    indice: "Entre 25 y 29.9 IMC",
    recomendacion: "Está un poco excedido de peso, necesitará controlar sus comidas y realizar actividad física moderada 3 a 5 días por semana"
}
const Obeso = {
    indice: "Entre 30 y 39.9 IMC",
    recomendacion: "en este caso, mantener una dieta mucho mas saludable y aumentar la actividad físia entre 4 a 6 días por semana"
}
const obesidadExtrema = {
    indice: "Mayor a 40 IMC",
    recomendacion: "Llegando a este punto tan extremo, se necesita una dieta sumamente estricta, acompañamiento medico y entrenamiento personalizado segun la capacidad que tenga el cuerpo de soportar."
}

export{
    bajoPeso, 
    buenPeso, 
    sobrePeso, 
    Obeso, 
    obesidadExtrema
};
