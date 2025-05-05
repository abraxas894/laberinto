let [a, b, c, d, e] = Array(5).fill().map(() => Math.floor(Math.random() * 900));
  
const obtenerColumna = () => {
  for (let i = 0; i <= 32; i++) {
    let columna01 = document.getElementById(`v${i + 1}c1`).innerHTML;
    let columna03 = document.getElementById(`v${i + 1}c3`).innerHTML;

    
    console.log(columna01);

  }
}

obtenerColumna();