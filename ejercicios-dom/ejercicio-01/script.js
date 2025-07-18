// Por consola el botón con clase .showme
const boton = document.querySelector(".showme");
console.log("1.1 Botón:", boton);

// Por consola el h1 con id #pillado
const h1 = document.querySelector("#pillado");
console.log("1.2 H1:", h1);

// Por consola todos los <p>
const parrafos = document.querySelectorAll("p");
console.log("1.3 Párrafos:", parrafos);

// Por consola todos los elementos con clase .pokemon
const pokemons = document.querySelectorAll(".pokemon");
console.log("1.4 Pokémons:", pokemons);

// Por consola todos los elementos con atributo data-function="testMe"
const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log("1.5 Personajes con data-function:", personajes);

//  Usar data-function="testMe"
const tercero = personajes[2];
console.log("1.6 Tercer personaje:", tercero);
