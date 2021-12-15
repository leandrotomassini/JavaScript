var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 2000 },
    { nombre: "Teclado", costo: 200 },
    { nombre: "Audifono", costo: 222 }
];


articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});


var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
});


console.log(articulosBaratos);