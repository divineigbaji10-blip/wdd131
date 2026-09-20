const currentYear = new Date().getFullYear();
document.querySelector('#currentyear').textContent = currentYear;
document.querySelector('#lastmodified').textContent = document.lastModified;

const temperature = 28;
const windSpeed = 20;

function calculateWindChill(temp, wind){
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);   
}

if (temperature <= 10 && windSpeed > 4.8){
    const windChill = calculateWindChill(temperature, windSpeed);
    document.querySelector('#wind-chill').textContent = `${windChill.toFixed(1)}`; 
} else{
    document.querySelector('#wind-chill').textContent = 'N/A';
}