function convertirTemperatura() {
    let celsius = document.getElementById("celsius").value;
    celsius = Number(celsius);
    if (isNaN(celsius)) {
        document.getElementById("resultados").innerHTML = "Error, vuelva a intentarlo";
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
    document.getElementById("resultados").innerHTML = `Grados Kelvin: ${kelvin}<br>Grados Fahrenheit: ${fahrenheit}`;
}




