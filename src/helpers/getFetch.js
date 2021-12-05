const productos = [
    {id:1, nombre:"Honey", descripcion:"Cerveza Honey por 750ml", categoria: "cerveza", precio: 200, img:'../IMG/products/beer.jpg'},
    {id:2, nombre:"IPA", descripcion:"Cerveza IPA por 750ml", categoria: "cerveza", precio: 200, img:'../IMG/products/beer.jpg'},
    {id:3, nombre:"Vino tinto", descripcion:"Vino tinto por 750 ml", categoria: "vino", precio: 400, img:'../IMG/products/redWhine.jpg'},
    {id:4, nombre:"Vino blanco", descripcion:"Vino blanco por 750 ml",  categoria: "vino", precio: 400, img:'../IMG/products/whiteWhine.jpg'}
]

 const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    },2000)
})
export default getFetch
