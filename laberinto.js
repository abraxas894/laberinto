const primeraColumna = ['amante,', 'festivo y', 'alegre', 'dichoso', 'ofrendas', 'amantes', 'al pecho', 'al cuello', 'te enlacen', 'ufano', 'voluntad', 'aceptas', 'no altivas', 'de ilustres', 'lucidas', 'costosas', 'las cortas', 'víctimas', 'de mi amor,', 'dichosa,', 'y suple,', 'para ti,', 'pido que,', 'escasa y', 'ansioso', 'fino mi', 'felices,', 'unida,', 'eterno', 'eterna,', 'parados', 'suspensos'];

const intermedios = ['caro', 'pronto', 'canta', 'porque', 'finas', 'señas', 'rica', 'dulces', 'firmes,', 'siempre,', 'y ojos', 'solas,', 'sirvan', 'fiestas,', 'danzas,', 'galas', 'muestras de', 'puras de', 'puesto', 'la que,', 'porque', 'visto,', 'cuerdo,', 'corta,', 'quiere', 'amor', 'y yo', 'sola,', 'vive:', 'para que', 'calmen', 'de que'];

const terceraColumna = ['dulce Esposo mío', 'tus felices años', 'sólo mi cariño', 'puede celebrarlos', 'a tu obsequio sean', 'de fino holocausto', 'mi corazón, joya,', 'cadenas mis brazos', 'pues mi amor no ignora', 'que son a tu agrado', 'las mejores joyas', 'las de mis halagos', 'no, en demostraciones', 'de altos aparatos', 'célebres festines', 'de regios saraos', 'el cariño acepta', 'el afecto casto', 'que te ofrezco, Esposa', 'Dueño, te consagro', 'si mi obsequio humilde', 'pareciere acaso', 'no aprecies la ofrenda', 'sino mi cuidado', 'con mi propia vida', 'acrecentar tus años', 'quiero; pero es una', 'la que anima a entreambos', 'vive, y yo en ti viva', 'identificados', 'el Amor y el Tiempo', 'nos miren milagrosos'];

// Se utiliza un algortimo Fisher-Yates para un ordenamiento estocástico

const arrayaleatorio = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = array[i]; 
    array[i] = array[j];
    array[j] = k;
  }
  return array;
  }

// función para definir un rango aleatorio

const rangoAleatorio = (max, min) => {
  return (Math.floor(Math.random() * (max - min))) + min;
}

// color aleatorio

const distintoColorAleatorio = () => {
  const cadaRGB = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const color = `#${cadaRGB()}${cadaRGB()}${cadaRGB()}`;
  return color;
}

// cambiarPrimera() modifica el orden de los versos de la primera columna

const cambiarPrimera = () => {
  let nuevaPrimera = arrayaleatorio(primeraColumna);
  for (let i = 0; i <= 31; i++) {
    document.getElementById(`v${i + 1}c1`).innerHTML = nuevaPrimera[i];
  }
  for (let j = 1; j <= 32; j = j + 4) {
    document.getElementById(`v${j}c1`).style.color = '#ab0033';
    document.getElementById(`v${j}c1`).style.textTransform = 'uppercase';
    if (window.matchMedia("(max-width: 670px)").matches) {
      document.getElementById(`v${j}c1`).style.color = '#f28d8d';
    }
  }
}

// cambiarIntermedios() representa la principal función de esta pieza

const cambiarIntermedios = () => {
  let celda = arrayaleatorio(intermedios);
  for (let i = 0;  i <= 31; i++) {
    document.getElementById(`v${i + 1}c2`).innerHTML = celda[i];
  }
  for (let j = 2; j <= 32; j = j + 4) {
    document.getElementById(`v${j}c2`).style.color = '#8b008b';
    document.getElementById(`v${j}c2`).style.fontVariant = 'small-caps';
    document.getElementById(`v${j}c2`).style.letterSpacing = '2px';
    if (window.matchMedia("(max-width: 670px)").matches) {
      document.getElementById(`v${j}c2`).style.color = '#ff80ff';
    }
  }
  for (let k = 3; k <= 32; k = k + 4) {
    document.getElementById(`v${k}c2`).style.color = '#8b008b';
    document.getElementById(`v${k}c2`).style.fontVariant = 'small-caps';
    document.getElementById(`v${k}c2`).style.letterSpacing = '2px';
    if (window.matchMedia("(max-width: 670px)").matches) {
      document.getElementById(`v${k}c2`).style.color = '#ff80ff';
    }
  }
}

// cambiarTercera() modifca el orden de los versos de la última columna

const cambiarTercera = () => {
  let nuevaTercera = arrayaleatorio(terceraColumna);
  for (let i = 0; i <= 31; i++) {
    document.getElementById(`v${i + 1}c3`).innerHTML = nuevaTercera[i];
  }
  for (let j = 4; j <= 32; j = j + 4) {
    document.getElementById(`v${j}c3`).style.color = '#000080';
    document.getElementById(`v${j}c3`).style.fontVariant = 'small-caps';
    document.getElementById(`v${j}c3`).style.letterSpacing = '2px';
    document.getElementById(`v${j}c3`).style.textSize = '.9em';
    if (window.matchMedia("(max-width: 670px)").matches) {
      document.getElementById(`v${j}c3`).style.color = '#a7b9f1';
    }
  }   
}

// funcion para trazar pasillos del laberinto

const lineasLaberinto = () => {
  let unVerso = document.getElementById(`v${rangoAleatorio(1, 33)}c${rangoAleatorio(1, 4)}`);
  unVerso.style.textDecorationLine = 'line-through';
  unVerso.style.textDecorationThickness = `${rangoAleatorio(30, 90)}%`;
  unVerso.style.textDecorationColor = `rgba(25, 25, 25, .${rangoAleatorio(80, 90)})`;
  if (window.matchMedia("(max-width: 670px)").matches) {
    unVerso.style.textDecorationColor = `rgba(255, 255, 255, .${rangoAleatorio(90, 99)})`;
  }
}

const vecesLineas = () => {
  let repetirVeces = rangoAleatorio(15, 25);
  console.log(`Existen ${repetirVeces} pasillos`);
  for (let i = 1; i <= repetirVeces; i++) {
    lineasLaberinto();
  }
}

// función para trazar tachecitos en el Laberinto

const trazarTaches = () => {
  let enmienda = document.getElementById(`v${rangoAleatorio(1, 33)}c${rangoAleatorio(1, 4)}`);
  let figuraTache = ['a', 'b', 'c', 'f', 'g', 'h', 'l', 'n', 's', 't', 'v', 'w', 'x', 'W', '1', '2', '3', '5'];
  enmienda.innerHTML = figuraTache[rangoAleatorio(0, 18)];
  enmienda.style.color = `rgb(${rangoAleatorio(0, 255)}, 0, 0)`;
  enmienda.style.fontFamily = 'enmendadura';
  enmienda.style.fontSize = '2em';
}

const variosTaches = () => {
  let repetirTaches = rangoAleatorio(5, 15);
  console.log(`Existen ${repetirTaches} enmiendas`);
  for (let i = 1; i <= repetirTaches; i++) {
    trazarTaches();
  }
}

// cambiar el color de Hedera 

const hedera = () => {
  let hederaColor = document.getElementById('hedera');
  hederaColor.style.color = `${distintoColorAleatorio()}`; 
}

hedera();

// Desplegar menu

const desplegarMenu = () => {
  let esteMenu = document.getElementById('esteMenu');
    if (esteMenu.className === 'menuResponsivo') {
      esteMenu.className += ' responsivo';
    } else {
      esteMenu.className = 'menuResponsivo';
    }
  }


// Arreglo excesivo para crear enlaces en los botones

let botonEnlace = () => {
  document.getElementByClassName('botones').addEventListener('click', () => {
      window.location.href = "#poema";
    });
}



