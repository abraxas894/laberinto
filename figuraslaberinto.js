const colorHEX = () => {
  const cadaRGB = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const color = `#${cadaRGB()}${cadaRGB()}${cadaRGB()}`;
  return color;
};

const invertirColorHEX = (colorHEX) => {
  // Elimina el "#" si está presente
  colorHEX = colorHEX.replace('#', '');

  // Convierte el HEX a RGB
  const r = parseInt(colorHEX.substring(0, 2), 16);
  const g = parseInt(colorHEX.substring(2, 4), 16);
  const b = parseInt(colorHEX.substring(4, 6), 16);

  // Calcula el inverso de cada componente
  const rInverso = 255 - r;
  const gInverso = 255 - g;
  const bInverso = 255 - b;

  // Convierte los componentes inversos a HEX y asegura 2 dígitos
  const hexInverso = `#${rInverso.toString(16).padStart(2, '0')}${gInverso.toString(16).padStart(2, '0')}${bInverso.toString(16).padStart(2, '0')}`;

  return hexInverso;
}

const colorAleatorio = colorHEX();
console.log(colorAleatorio);

const colorInverso = invertirColorHEX(colorAleatorio);
console.log(colorInverso);

const dibujar = () => {

  const lienzo = document.getElementById('figuraPortada');
  const ctx = lienzo.getContext('2d');

  let x = lienzo.width;
  let y = lienzo.height;

  let cx = Math.floor(Math.random() * x);
  let cy = Math.floor(Math.random() * y);
  let r = Math.floor(Math.random() * 150);
  let circ = Math.PI * 2;

  ctx.strokeStyle = colorHEX();
  
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