
const dibujarTriangulos = () => {

  const rangoAleatorio = (max, min) => {
    return (Math.floor(Math.random() * (max - min))) + min;
  };

  const lienzoRect = document.getElementById('hola');
  const ctx = lienzoRect.getContext('2d');

  let x = Math.floor(Math.random() * lienzoRect.width / 4);
  let y = Math.floor(Math.random() * lienzoRect.height / 4);

  console.log(x, y);

  let a = rangoAleatorio(10, 100);
  let r = rangoAleatorio(0, 360)

  console.log(a);
  
  ctx.strokeStyle = '#faebd7';

  ctx.save()
  ctx.rotate(Math.PI / 180 * r);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + a, y);
  ctx.lineTo((x + (x + a)) / 2, y - a);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

dibujarTriangulos();