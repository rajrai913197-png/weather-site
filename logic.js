let submit=()=>{
    location.href = "main.html"
}
let clickBtn=async()=>{
    let inp = document.getElementById("inp").value.trim()
     location.href = "weather.html"
    localStorage.setItem("myCity",inp)

}
let city = localStorage.getItem("myCity")
console.log(city);
