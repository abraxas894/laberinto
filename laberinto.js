
const verArray = (array) => {
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

const arrayaleatorio = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = array[i];
    array[i] = array[j];
    array[j] = k;
  }
  return array;
}

const poema = '';

const intermedios = ['caro', 'pronto', 'canta', 'porque', 'finas', 'señas', 'rica', 'dulces', 'firmes,', 'siempre,', 'y ojos', 'solas,', 'sirvan', 'fiestas,', 'danzas,', 'galas', 'muestras de', 'puras de', 'puesto', 'la que,', 'porque', 'visto,', 'cuerdo,', 'corta,', 'quiere', 'amor', 'y yo', 'sola,', 'vive:', 'para que', 'calmen', 'de que'];

const laberinto = `Amante,—${intermedios[0]},—dulce Esposo mío,
festivo y—${intermedios[1]}—tus felices años
alegre—${intermedios[2]}—sólo mi cariño,
dichoso—${intermedios[3]}—puede celebrarlos.

Ofrendas—${intermedios[4]}—a tu obsequio sean
amantes—${intermedios[5]}—de fino holocausto,
al pecho—${intermedios[6]}—mi corazón, joya,
al cuello—${intermedios[7]}—cadenas mis brazos.

Te enlacen—${intermedios[8]}—pues mi amor no ignora
ufano—${intermedios[9]}—que son a tu agrado
voluntad—${intermedios[10]}—las mejores joyas,
aceptas—${intermedios[11]}—las de mis halagos.

No altivas—${intermedios[12]}—,no, en demostraciones
de ilustres—${intermedios[13]}—de altos aparatos,
lucidas—${intermedios[14]}—célebres festines,
costosas—${intermedios[15]}—de regios saraos.

Las cortas—${intermedios[16]}—el cariño acepta,
víctimas—${intermedios[17]}—el afecto casto
de mi amor,—${intermedios[18]}—que te ofrezco, Esposa
dichosa,—${intermedios[19]}—Dueño, te consagro.

Y suple,—${intermedios[20]}—si mi obsequio humilde
para ti,—${intermedios[21]}— pareciere acaso,
pido que,—${intermedios[22]}—no aprecies la ofrenda
escasa y—${intermedios[23]}—sino mi cuidado.

Ansioso—${intermedios[24]}—con mi propia vida
fino mi—${intermedios[25]}—acrecentar tus años
felices,—${intermedios[26]}—quiero; pero es una,
unida,—${intermedios[27]}—la que anima a entreambos.

Eterno—${intermedios[28]}—vive, y yo en ti viva
eterna,—${intermedios[29]}— identificados,
parados—${intermedios[30]}—el Amor y el Tiempo
suspensos—${intermedios[31]}— nos miren milagrosos.`

let celda = arrayaleatorio(intermedios);

const laberintoEndecasilabo = `Amante,—${celda[0]},—dulce Esposo mío,
festivo y—${celda[1]}—tus felices años
alegre—${celda[2]}—sólo mi cariño,
dichoso—${celda[3]}—puede celebrarlos.

Ofrendas—${celda[4]}—a tu obsequio sean
amantes—${celda[5]}—de fino holocausto,
al pecho—${celda[6]}—mi corazón, joya,
al cuello—${celda[7]}—cadenas mis brazos.

Te enlacen—${celda[8]}—pues mi amor no ignora
ufano—${celda[9]}—que son a tu agrado
voluntad—${celda[10]}—las mejores joyas,
aceptas—${celda[11]}—las de mis halagos.

No altivas—${celda[12]}—,no, en demostraciones
de ilustres—${celda[13]}—de altos aparatos,
lucidas—${celda[14]}—célebres festines,
costosas—${celda[15]}—de regios saraos.

Las cortas—${celda[16]}—el cariño acepta,
víctimas—${celda[17]}—el afecto casto
de mi amor,—${celda[18]}—que te ofrezco, Esposa
dichosa,—${celda[19]}—Dueño, te consagro.

Y suple,—${celda[20]}—si mi obsequio humilde
para ti,—${celda[21]}— pareciere acaso,
pido que,—${celda[22]}—no aprecies la ofrenda
escasa y—${celda[23]}—sino mi cuidado.

Ansioso—${celda[24]}—con mi propia vida
fino mi—${celda[25]}—acrecentar tus años
felices,—${celda[26]}—quiero; pero es una,
unida,—${celda[27]}—la que anima a entreambos.

Eterno—${celda[28]}—vive, y yo en ti viva
eterna,—${celda[29]}— identificados,
parados—${celda[30]}—el Amor y el Tiempo
suspensos—${celda[31]}— nos miren milagrosos.`


console.log(laberinto);
console.log(celda);
console.log(laberintoEndecasilabo);
