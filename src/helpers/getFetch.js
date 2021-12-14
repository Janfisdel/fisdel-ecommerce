import beer from '../IMG/products/beer.jpg'
import redWine from '../IMG/products/redWine.jpg'
import whiteWine from '../IMG/products/whiteWine.jpg'
import coke from '../IMG/products/coke.jpg'
import orangeJuice from '../IMG/products/orangeJuice.jpg'
import water from '../IMG/products/water.jpg'

const productos = [
    {id:1, nombre:"Honey", descripcion:"Cerveza Honey por 750ml", categoria: "cerveza", precio: 200, img:beer, alt:"cerveza Honey", stock:10},
    {id:2, nombre:"IPA", descripcion:"Cerveza IPA por 750ml", categoria: "cerveza", precio: 200, img:beer, alt:"cerveza IPA", stock:15},
    {id:3, nombre:"Vino tinto", descripcion:"Vino tinto por 750 ml", categoria: "vino", precio: 400, img:redWine, alt:"vino tinto", stock:5},
    {id:4, nombre:"Vino blanco", descripcion:"Vino blanco por 750 ml",  categoria: "vino", precio: 400, img:whiteWine, alt:"vino blanco", stock:10},
    {id:5, nombre:"Gaseosa", descripcion:"Gaseosa Cola por 2.5L", categoria:"sin_alcohol", precio: 250, img:coke, alt:"gaseosa cola", stock:10},
    {id:6, nombre:"Jugo de naranja", descripcion: "Jugo de naranja por 1L", categoria:"sin_alcohol", precio: 150, img:orangeJuice, alt:"jugo de naranja", stock:10},
    {id:7, nombre:"Agua sin gas", descripcion:"Agua sin gas por 1L", categoria:"sin_alcohol", precio: 100, img:water, alt: "agua",stock:10}

]

 const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    },2000)
})
export default getFetch

