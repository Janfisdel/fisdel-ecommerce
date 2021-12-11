import beer from '../IMG/products/beer.jpg'
import redWine from '../IMG/products/redWine.jpg'
import whiteWine from '../IMG/products/whiteWine.jpg'

const productos = [
    {id:1, nombre:"Honey", descripcion:"Cerveza Honey por 750ml", categoria: "cerveza", precio: 200, img:beer, alt:"cerveza Honey"},
    {id:2, nombre:"IPA", descripcion:"Cerveza IPA por 750ml", categoria: "cerveza", precio: 200, img:beer, alt:"cerveza IPA"},
    {id:3, nombre:"Vino tinto", descripcion:"Vino tinto por 750 ml", categoria: "vino", precio: 400, img:redWine, alt:"vino tinto"},
    {id:4, nombre:"Vino blanco", descripcion:"Vino blanco por 750 ml",  categoria: "vino", precio: 400, img:whiteWine, alt:"vino blanco"}
]

 const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    },2000)
})
export default getFetch

