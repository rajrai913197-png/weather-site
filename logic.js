let submit=()=>{
    location.href = "main.html"
}
let clickBtn=async()=>{
    let inp = document.getElementById("inp").value.trim()
    let apiKey = `7c6c0e0f18c17fdb3602fbdd8824ff99`
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${apiKey}&units=metric`
    let res = await fetch(api);
    let data = await res.json()
    console.log(data);
    // location.href = "weather.html"

}




