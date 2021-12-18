const productos = [
    {id:1, nombre:"Honey", descripcion:"Cerveza Honey por 750ml", categoria: "cerveza", precio: 200, img:'https://res.cloudinary.com/janfis/image/upload/v1639865081/React%20JS%20-%20e%20commerce/products/beer_aswjxy.jpg', alt:"cerveza Honey", stock:10},
    {id:2, nombre:"IPA", descripcion:"Cerveza IPA por 750ml", categoria: "cerveza", precio: 200, img:'https://res.cloudinary.com/janfis/image/upload/v1639865081/React%20JS%20-%20e%20commerce/products/beer_aswjxy.jpg', alt:"cerveza IPA", stock:15},
    {id:3, nombre:"Vino tinto", descripcion:"Vino tinto por 750 ml", categoria: "vino", precio: 400, img:'https://res.cloudinary.com/janfis/image/upload/v1639865074/React%20JS%20-%20e%20commerce/products/redWine_gty7zz.jpg', alt:"vino tinto", stock:5},
    {id:4, nombre:"Vino blanco", descripcion:"Vino blanco por 750 ml",  categoria: "vino", precio: 400, img:'https://res.cloudinary.com/janfis/image/upload/v1639865078/React%20JS%20-%20e%20commerce/products/whiteWine_ljk66l.jpg', alt:"vino blanco", stock:10},
    {id:5, nombre:"Gaseosa", descripcion:"Gaseosa Cola por 2.5L", categoria:"sin_alcohol", precio: 250, img:'https://res.cloudinary.com/janfis/image/upload/v1639865075/React%20JS%20-%20e%20commerce/products/coke_mmchtc.jpg', alt:"gaseosa cola", stock:10},
    {id:6, nombre:"Jugo de naranja", descripcion: "Jugo de naranja por 1L", categoria:"sin_alcohol", precio: 150, img:'https://res.cloudinary.com/janfis/image/upload/v1639865070/React%20JS%20-%20e%20commerce/products/orangeJuice_izbflw.jpg', alt:"jugo de naranja", stock:10},
    {id:7, nombre:"Agua sin gas", descripcion:"Agua sin gas por 1L", categoria:"sin_alcohol", precio: 100, img:'https://res.cloudinary.com/janfis/image/upload/v1639865073/React%20JS%20-%20e%20commerce/products/water_prsvqb.jpg', alt: "agua",stock:10}

]

 const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    },2000)
})
export default getFetch

