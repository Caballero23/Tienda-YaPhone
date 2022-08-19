const productos=[
    {href:'r1.html',imagen:'img/relojes/r1.webp',nombre:'Xiaomi Band 5', valor:392},
    {href:'r2.html',nombre:'Huawei 45',imagen:'img/relojes/r2.webp', valor:650},
    {href:'r3.html',nombre:'Samsung Band S3',imagen:'img/relojes/r3.webp', valor:720},
    {href:'r4.html',nombre:'Xiaomi Note Band',imagen:'img/relojes/r4.jpg', valor:450},
    {href:'r5.html',nombre:'Huawei 46 Plus',imagen:'img/relojes/r5.webp', valor:350},
    {href:'r6.html',nombre:'Apple Watch 5',imagen:'img/relojes/r6.jpg', valor:579}
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
    resultado.innerHTML =` <a href='r6.html'style='text-decoration:none;color:black;(otros)'> <b><img src='img/relojes/r6.jpg''width="265" height="210"><br></img><div float:left </a><center>Apple Watch 5<br>  500€</b><br><br><br><br></center></div></a>
    `

}
},false);

var resultado_tercero = document.getElementById('resultado_tercero');
resultado_tercero.addEventListener("click",function()
{
    for(let app of huawei){
    resultado.innerHTML =` <a href='r2.html'style='text-decoration:none;color:black;(otros)'> <b><img src='img/relojes/r2.webp''width="265" height="210"><br></img><div float:left </a><center>Huawei 45<br>  650€</b><br><br><br><br></center></div></a> <a href='r5.html'style='text-decoration:none;color:black;(otros)'> <b><img src='img/relojes/r5.webp''width="265" height="210"><br></img><div float:left </a><center>Huawei 46 Plus<br>  350€</b><br><br><br><br></center></div></a> 
    `

}
},false);

var resultado_cuarto = document.getElementById('resultado_cuarto');
resultado_cuarto.addEventListener("click",function()
{
    for(let app of samsung){
    resultado.innerHTML =` <a href='r3.html'style='text-decoration:none;color:black;(otros)'> <b><img src='img/relojes/r3.webp''width="265" height="210"><br></img><div float:left </a><center>Samsung Band S3<br>  720€</b><br><br><br><br></center></div></a> 
    `

}
},false);

var resultado_quinto = document.getElementById('resultado_quinto');
resultado_quinto.addEventListener("click",function()
{
    for(let app of Xiaomi){
    resultado.innerHTML =` <a href='r1.html'style='text-decoration:none;color:black;(otros)'> <b><img src='img/relojes/r1.webp''width="265" height="210"><br></img><div float:left </a><center>Xiaomi Band 5<br>  392€</b><br><br><br><br></center></div></a> <a href='r4.html'style='text-decoration:none;color:black;(otros)'> <b><img src='img/relojes/r4.jpg''width="265" height="210"><br></img><div float:left </a><center>Xiaomi Note Band<br> 450€</b><br><br><br><br></center></div></a> 
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
 

