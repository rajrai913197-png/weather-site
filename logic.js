let submit=()=>{
    location.href = "main.html"
}
let clickBtn=async()=>{
    let inp = document.getElementById("inp").value.trim()
    localStorage.setItem("myCity",inp)
     location.href = "weather.html"
   
   
 
}

let local = ()=>{
let data = localStorage.getItem("myCity")
console.log(data);



}
local()