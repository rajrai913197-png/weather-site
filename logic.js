


let button = async()=>{
let myCity = document.getElementById("inpbtn").value.trim()
let key = "4b1f68f88e61fac1cbb6ba522b32c87a"
let api = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${key}&units=metric`
let res = await fetch(api);
let data = await res.json()
console.log(data);

let home = document.getElementById("home")
home.innerHTML = data.name
let mean = document.getElementById("mosam")
let day = data.weather[0].main
if(day === "Clear"){
  mean.innerHTML = "Sunny"
}
else if(day === "Clouds"){
    mean.innerHTML = "Cloudy"
}
else if(day === "Rain"){
   mean.innerHTML = "Rainy"
}
else if(day === "Haze"){
   mean.innerHTML = "Smokey"
}

let deg = document.getElementById("main-deg")
deg.innerHTML = data.main.temp + "&deg;C"
let feel = document.getElementById("feel")
feel.innerHTML = data.main.feels_like + "&deg;C"

}
