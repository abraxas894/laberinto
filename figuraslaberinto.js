

const dibujar = () => {

  const lienzo = document.getElementById('figuraPortada');
  const ctx = lienzo.getContext('2d');

  let x = lienzo.width;
  let y = lienzo.height;

  let cx = Math.floor(Math.random() * x);
  let cy = Math.floor(Math.random() * y);
  let r = Math.floor(Math.random() * 150);

  let circ = Math.PI * 2;

  let trazoAleatorio = Math.floor(Math.random() * 15)    

  let colorAzar = Math.floor(Math.random() * 17);
  let matices = ['aqua', 'pink', 'blue', 'fuchsia', 'Linen', 'green', 'lime', 'salmon', 'violet', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
  ctx.strokeStyle = matices[colorAzar];    

  
    let numeroCirculos = Math.floor(Math.random() * 7);
    for (let i = 0; i <= numeroCirculos; i++) {
    for (let j = 0; j <= numeroCirculos; j++) {
      ctx.beginPath();
      ctx.arc(cx + (i * Math.floor(Math.random() * 200)), cy + (j * Math.floor(Math.random() * 50)), r, 0, circ, false);
      ctx.stroke();
      }
    }

}

dibujar();

const dataURL = lienzo.toDataURL('image/png');

// document.header.style.backgroundImage = `url(${dataURL})`; 