let submit=()=>{
    location.href = "main.html"
}
let clickBtn=()=>{
    let inp = document.getElementById("inp").value.trim()
    localStorage.setItem("myCity",inp)
     location.href = "weather.html"
   
   
 
}

let local =async()=>{
let data = localStorage.getItem("myCity")
console.log(data);
let apiKey = "7c6c0e0f18c17fdb3602fbdd8824ff99"
let api = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${apiKey}&units=metric`
let res = await fetch(api);
let main = await res.json()
console.log(main);
let mainCity = document.getElementById("city")
 mainCity.innerHTML = main.name;
let mosam = main.weather[0].main
let citynew = document.getElementById("citynew")
if (mosam === "Clouds") {
    citynew.innerHTML = "badal"
}
if (mosam === "Clear") {
     citynew.innerHTML = "saaf"
} 
if (mosam === "Rain") {
     citynew.innerHTML = "barish"
}
if (mosam === "Haze") {
     citynew.innerHTML = "dhund levels"
} 
let deg = document.getElementById("deg-div")
deg.innerHTML = main.main.temp + "&degC";
let feels = document.getElementById("feels")
feels.innerHTML = main.main.feels_like + "&degC";
let winds = document.getElementById("winds")
winds.innerHTML =main.wind.speed +"&nbsp"+"m/s"
}
local()