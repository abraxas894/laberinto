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
};

// cambiarPrimera() modifica el orden de los versos de la primera columna

const cambiarPrimera = () => {
  let nuevaPrimera = arrayaleatorio(primeraColumna);
  for (let i = 1; i <= 32; i++) {
    document.getElementById(`v${i}c1`).innerHTML = nuevaPrimera[i];
  }
  for (let j = 1; j <= 32; j = j + 4) {
    document.getElementById(`v${j}c1`).style.color = '#8b0000';
    document.getElementById(`v${j}c1`).style.textTransform = 'uppercase';
  }
}

// cambiarIntermedios() representa la principal función de esta pieza

const cambiarIntermedios = () => {
  let celda = arrayaleatorio(intermedios);

  for (let i = 1;  i <= 32; i++) {
    document.getElementById(`v${i}c2`).innerHTML = celda[i];
  }
  for (let j = 2; j <= 32; j = j + 2) {
    document.getElementById(`v${j}c2`).style.color = '#8b008b';
  }
  for (k = 3; k <= 32; k = k + Math.floor(Math.random() * 4))
    document.getElementById(`v${k}c2`).style.textDecorationLine = 'line-through';
}

// cambiarTercera() modifca el orden de los versos de la última columna

const cambiarTercera = () => {
  let nuevaTercera = arrayaleatorio(terceraColumna);
  for (let i = 1; i <= 32; i++) {
    document.getElementById(`v${i}c3`).innerHTML = nuevaTercera[i];
  }
  for (let j = 4; j <= 32; j = j + 4) {
    document.getElementById(`v${j}c3`).style.color = '#00008b';
  }   
}

// funcion para trazar pasillos del laberinto

const lineasLaberinto = () => {
  let unVerso = document.getElementById(`v${rangoAleatorio(1, 33)}c${rangoAleatorio(1, 4)}`);
  unVerso.style.textDecorationLine = 'line-through';
  unVerso.style.textDecorationThickness = `${rangoAleatorio(10, 90)}%`;
  unVerso.style.textDecorationColor = '#663399';
}

const vecesLineas = () => {
  let repetirVeces = rangoAleatorio(20, 35);
  console.log(`Existen ${repetirVeces} pasillos`);
  for (let i = 1; i <= repetirVeces; i++) {
    lineasLaberinto();
  }
}

