//array, arrglo, matriz, lista, vector son todos sinonimos
// los arrays se escriben entre []

var nombre = ["Javier", "Omar", "Damico"];

//pueden tener distintos tipos de datos
var mixto = ["soy un string", 123, true, null, []];

//agregar nuevo elemento al array
mixto.push("nuevo dato");

console.log(mixto.length);

//iteraciones
//desde - hasta - salto

for (var i = 0; i < 9; i++) {
  console.log(i);
}

for (var i = 0; i < mixto.length; i++) {
  console.log(mixto[i]);
}

// Objetos (array asociativo) se usan {}

var usuario = {
  primerNombre: "Javier",
  segundoNombre: "Omar",
  apellido: "Damico",
  altura: 1.75,
  esExtranjero: false,
};

// usuario.primerNombre -> asi se usa

var link = 'a href="#home">...</a>';

var linksContainer = document.querySelector(".second-nav-links");

// console.log(linksContainer)

// var links = [
//     'Home',
//     'Nosotros',
//     'Productos',
//     'Contacto',
// ]

var contacts = [
  {
    photo_url: "...",
    name: "Cosme Fulanito",
    last_connection: "2021-04-19 18:59:34",
    last_message: {
      text: "ahgjdahgsdj",
      date: "2021-04-19 18:59:34",
      read: true,
    },
  },
  {
    photo_url: "...",
    name: "Cosme Fulanito",
    last_connection: "2021-04-19 18:59:34",
    last_message: null,
  },
  {
    photo_url: "...",
    name: "Cosme Fulanito",
    last_connection: "2021-04-19 18:59:34",
    last_message: null,
  },
];

var links = [
  {
    href: "#home",
    name: "Home",
    children: [],
  },
  {
    href: "#productos",
    name: "Productos",
    children: [
      {
        href: "sublink uno",
        name: "sublink uno",
      },
      {
        href: "sublink dos",
        name: "sublink dos",
      },
    ],
  },
  {
    href: "#nosotros",
    name: "Nosotros",
    children: [],
  },
  {
    href: "#contacto",
    name: "Contacto",
    children: [],
  },
];

for (var i = 0; i < links.length; i++) {
  linksContainer.innerHTML += generateLink(links[i]);
}

function generateLink(link) {
  console.log(link);
  return '<a href="' + links[i].href + '">' + links[i].name + "</a>";
}

var itemsContainer = document.querySelector("#items");

var products = [
  {
    photo: "https://placeimg.com/400/400/tech",
    description:
      "Product category one Product category one Product category one Product category one Product category one",
  },
  {
    photo: "https://placeimg.com/400/400/tech",
    description:
      "Product category one Product category one Product category one Product category one Product category one",
  },
  {
    photo: "https://placeimg.com/400/400/tech",
    description:
      "Product category one Product category one Product category one Product category one Product category one",
  },
  {
    photo: "https://placeimg.com/400/400/tech",
    description:
      "Product category one Product category one Product category one Product category one Product category one",
  },
  {
    photo: "https://placeimg.com/400/400/tech",
    description:
      "Product category one Product category one Product category one Product category one Product category one",
  },
  {
    photo: "https://placeimg.com/400/400/tech",
    description:
      "Product category one Product category one Product category one Product category one Product category one",
  },
  {
    photo: "https://placeimg.com/400/400/tech",
    description:
      "Product category one Product category one Product category one Product category one Product category one",
  },
  {
    photo: "https://placeimg.com/400/400/tech",
    description:
      "Product category one Product category one Product category one Product category one Product category one",
  },
  {
    photo: "https://placeimg.com/400/400/tech",
    description:
      "Product category one Product category one Product category one Product category one Product category one",
  },
  {
    photo: "https://placeimg.com/400/400/tech",
    description:
      "Product category one Product category one Product category one Product category one Product category one",
  },
  {
    photo: "https://placeimg.com/400/400/tech",
    description:
      "Product category one Product category one Product category one Product category one Product category one",
  },
  {
    photo: "https://placeimg.com/400/400/tech",
    description:
      "Product category one Product category one Product category one Product category one Product category one",
  },
];

// for (var i = 0; i < items.length; i++) {
//     var html = ''
//     html += '<div class="item-product">'
//     html += '<img src="' + items[i].foto + '" alt="Logo Google">'
//     html += '<p><b>Product category one</b>' + items[i].texto + '</p>'
//     html += '</div>'
//     console.log(html)
//     itemsContainer.innerHTML += html
// }

// for (var i = 0; i < items.length; i++) {
//     itemsContainer.innerHTML +=
//         '<div class="item-product">' +
//         '<img src="' +
//         items[i].foto +
//         '" alt="Logo Google">' +
//         "<p><b>Product category one</b>" +
//         items[i].texto +
//         "</p>" +
//         "</div>";
// console.log(itemsContainer)
// }

// Esto es otra forma de hacer lo mismo de arriba sin tanta concatenacion

// for (var i = 0; i < items.length; i++) {
//   itemsContainer.innerHTML += `<div class="item-product"><img src="${items[i].foto}" alt="Logo Google">
//     <p><b>Product category one</b>${items[i].texto}</p></div>`;
// }

var paginacion = document.querySelector(".paginacion");

var cantidadDeResultados = 4;

function mostrarItems(q) {
  for (var i = 0; i < q; i++) {
    itemsContainer.innerHTML += `
            <div class="item-product">
                <img src="${products[i].photo}" alt="Logo Google" />
                <p>${products[i].description}</p>
            </div>
        `;
  }
}

paginacion.addEventListener("click", function () {
  cantidadDeResultados = 8;
  mostrarItems(cantidadDeResultados);
});

mostrarItems(cantidadDeResultados);
