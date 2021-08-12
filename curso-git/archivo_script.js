function ejecuta(){
//     for(var i=0; i < 3 ; i++){
// 	document.getElementsByTagName("p")[i].onclick=saludo;
// //  document.getElementsById("importante").onclick=saludo;
    
// }
// 	document.getElementsByTagName("importante")[0].onclick=saludo;
// for(var i=0 ; i<2;i++){
// var z = document.getElementsByClassName("importante")[i].onclick=saludo;  
// }
// document.querySelector("#principal p:first-child").onclick = saludo;
var elements = document.querySelectorAll("#principal p,span");
for (var i=0 ; i < elements.length ; i++){
elements[i].onclick=saludo;
}
}



function saludo(){
	alert("Que hay de nuevo"); 
}
window.onload=ejecuta;





