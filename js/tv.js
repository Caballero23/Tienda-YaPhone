const productos=[
    {href:'t1.html',imagen:'img/televisiones/t1.png',nombre:'LG plus 46', valor:390},
    {href:'t2.html',nombre:'Beko S344',imagen:'img/televisiones/t8.webp', valor:650},
    {href:'t3.html',nombre:'Philips 56',imagen:'img/televisiones/t3.webp', valor:420},
    {href:'t4.html',nombre:'TD System A4',imagen:'img/televisiones/t4.png', valor:590},
    {href:'t5.html',nombre:'LG 57',imagen:'img/televisiones/t5.jpg', valor:900},
    {href:'t6.html',nombre:'Philips Neo',imagen:'img/televisiones/t6.jpg', valor:579}
]
const apple=[
    {href:'moviles.html',imagen:'img/apple_i.webp',nombre:'Platanos', valor:1120},
    {nombre:'Sandia',imagen:'img/apple.png', valor:1300},
    {nombre:'Melon',imagen:'img/huawei.png', valor:500},
    {nombre:'I phone 14',imagen:'img/iphone66.jpg', valor:1300}
]
const huawei=[
    {href:'moviles.html',imagen:'img/apple_i.webp',nombre:'Platanos', valor:1120},
    {nombre:'Sandia',imagen:'img/apple.png', valor:500},
    {nombre:'Melon',imagen:'img/huawei.png', valor:500},
    {nombre:'Banano',imagen:'https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/430965_00_1.jpg', valor:500}
]
const samsung=[
    {href:'moviles.html',imagen:'img/samsung.jpg',nombre:'Samsung A53', valor:392},

]
const Xiaomi=[
    {href:'moviles.html',imagen:'img/xiaomi.jpg',nombre:'Samsung A53', valor:392},

]
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');
const filtrar = () =>{
    // console.log(formulario.value);
    const texto = formulario.value.toLowerCase();
    //comenzamos con una lista vacia para que no se concatenen cada vez que 
    //consultamos el metodo filtrar. 
    resultado.innerHTML = '';

    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();

        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += ` <a href='${producto.href}'style='text-decoration:none;color:black;(otros)'> <b><img src='${producto.imagen}'width="225" height="210"><br></img><div float:left </a><center>${producto.nombre} <br> ${producto.valor}€</b><br><br><br><br></center></div></a>
            `
        }

    }

    if(resultado.innerHTML === ''){

        resultado.innerHTML += `
        <li>Producto no encontrado</li>
        `
       
    }
}

boton.addEventListener('click',filtrar);
formulario.addEventListener('keyup', filtrar)
filtrar();


var resultado_segundo = document.getElementById('resultado_segundo');
resultado_segundo.addEventListener("click",function()
{
    for(let app of apple){
    resultado.innerHTML =` <a href='t1.html'style='text-decoration:none;color:black;(otros)'> <b><img src='img/televisiones/t1.png''width="265" height="210"><br></img><div float:left </a><center>LG plus 46 <br> 390€</b><br><br><br><br></center></div></a> <a href='t5.html'style='text-decoration:none;color:black;(otros)'> <b><img src='img/televisiones/t5.jpg'width="245" height="210"><br></img><div float:left </a><center>LG 57<br>  579€</b><br><br><br><br></center></div></a> 
    `

}
},false);

var resultado_tercero = document.getElementById('resultado_tercero');
resultado_tercero.addEventListener("click",function()
{
    for(let app of huawei){
    resultado.innerHTML =` <a href='t3.html'style='text-decoration:none;color:black;(otros)'> <b><img src='img/televisiones/t3.webp''width="265" height="210"><br></img><div float:left </a><center>Philips 56<br>  420€</b><br><br><br><br></center></div></a> <a href='t6.html'style='text-decoration:none;color:black;(otros)'> <b><img src='img/televisiones/t6.jpg''width="265" height="210"><br></img><div float:left </a><center>Philips Neo<br>  579€</b><br><br><br><br></center></div></a> 
    `

}
},false);

var resultado_cuarto = document.getElementById('resultado_cuarto');
resultado_cuarto.addEventListener("click",function()
{
    for(let app of samsung){
    resultado.innerHTML =` <a href='t4.html'style='text-decoration:none;color:black;(otros)'> <b><img src='img/televisiones/t4.png''width="265" height="210"><br></img><div float:left </a><center>TD System A4<br>  590€</b><br><br><br><br></center></div></a> 
    `

}
},false);

var resultado_quinto = document.getElementById('resultado_quinto');
resultado_quinto.addEventListener("click",function()
{
    for(let app of Xiaomi){
    resultado.innerHTML =` <a href='t2.html'style='text-decoration:none;color:black;(otros)'> <b><img src='img/televisiones/t8.webp''width="265" height="210"><br></img><div float:left </a><center>Beko S344<br> 650€</b><br><br><br><br></center></div></a> 
    `

}
},false);






window.onload = function() {
 asignarSelect();}
function asignarSelect(){
 //el evento se asigna sobre el <select>.
 let s= document.getElementById("sel1");
 s.addEventListener("change",mostrarSelect,false);}
function mostrarSelect(){
 i=this.selectedIndex; console.log("Indice seleccionado: "+i);
 v=this[i].value; console.log("El value seleccionado es: "+v);
 h=this[i].innerHTML; alert("El texto seleccionado es: "+h)
 //alert("El texto seleccionado es: "+h)

}
 

