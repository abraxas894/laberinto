const primeraOriginal = ['amante,', 'festivo y', 'alegre', 'dichoso', 'ofrendas', 'amantes', 'al pecho', 'al cuello', 'te enlacen', 'ufano', 'voluntad', 'aceptas', 'no altivas', 'de ilustres', 'lucidas', 'costosas', 'las cortas', 'víctimas', 'de mi amor,', 'dichosa,', 'y suple,', 'para ti,', 'pido que,', 'escasa y', 'ansioso', 'fino mi', 'felices,', 'unida,', 'eterno', 'eterna,', 'parados', 'suspensos'];

const segundaOriginal = ['caro', 'pronto', 'canta', 'porque', 'finas', 'señas', 'rica', 'dulces', 'firmes,', 'siempre,', 'y ojos', 'solas,', 'sirvan', 'fiestas,', 'danzas,', 'galas', 'muestras de', 'puras de', 'puesto', 'la que,', 'porque', 'visto,', 'cuerdo,', 'corta,', 'quiere', 'amor', 'y yo', 'sola,', 'vive:', 'para que', 'calmen', 'de que'];

const terceraOriginal = ['dulce Esposo mío', 'tus felices años', 'sólo mi cariño', 'puede celebrarlos', 'a tu obsequio sean', 'de fino holocausto', 'mi corazón, joya,', 'cadenas mis brazos', 'pues mi amor no ignora', 'que son a tu agrado', 'las mejores joyas', 'las de mis halagos', 'no, en demostraciones', 'de altos aparatos', 'célebres festines', 'de regios saraos', 'el cariño acepta', 'el afecto casto', 'que te ofrezco, Esposa', 'Dueño, te consagro', 'si mi obsequio humilde', 'pareciere acaso', 'no aprecies la ofrenda', 'sino mi cuidado', 'con mi propia vida', 'acrecentar tus años', 'quiero; pero es una', 'la que anima a entreambos', 'vive, y yo en ti viva', 'identificados', 'el Amor y el Tiempo', 'nos miren milagrosos'];

// laberintoNatural() hace un reordenamiento del poema originial

const laberintoOriginal = () => {
  for (let i = 0; i <= primeraOriginal.length; i++) {
    document.getElementById(`v${i + 1}c1`).innerHTML = primeraOriginal[i];
    for (let j = 0; j <= segundaOriginal.length; j++) {
      document.getElementById(`v${j + 1}c2`).innerHTML = segundaOriginal[j];
      for (let k = 0; k <= terceraOriginal.length; k++) {
        document.getElementById(`v${k + 1}c3`).innerHTML = terceraOriginal[k];
      }
    }
  }
}