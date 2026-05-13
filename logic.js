let submit=()=>{
    location.href = "main.html"
}
let btn=()=>{
    location.href = "index.html"
    return false
   
}

let city = document.getElementById("loc-inp").value.trim()
let key = "4b1f68f88e61fac1cbb6ba522b32c87a"
let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`




