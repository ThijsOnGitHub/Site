var tekst=document.getElementById("tekst")
var knop= document.getElementById("knop")
tekstvarianten=["Dit is magie, deze tekst is veranderd","Leuk dat je klikte","Nu lees je hier wat anders","ERROR 404"]
function randomInt(min,max) {
    return Math.floor(Math.random()*max*10)+min
}

knop.addEventListener("click",function (){
alert("Let's change some tekst")
deNieuweTekst=tekstvarianten[randomInt(0,tekstvarianten.length)]
tekst.innerHTML=deNieuweTekst
})