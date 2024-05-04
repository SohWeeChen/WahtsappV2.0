
let api = "https://api.npoint.io/d08dc40ffa901aa27feb"
let mes

async function get(){
    var fet = await fetch(api).then(res=>res.json())
    mes = await fet["message"]

    document.getElementById("p").innerHTML = mes
}
get()

async function send(){
    var message = document.getElementById("message").value
    var name = "anonymous"
    fetch(api,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            "message" : String(mes + "<br>" + name + ">> " + message)
        })
    })
}