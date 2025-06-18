class Maze {
  constructor(width, height) {
      this.width = width;
      this.height = height;
      this.grid = this.initializeGrid();
  }

  initializeGrid() {
      const grid = [];
      for (let y = 0; y < this.height; y++) {
          grid[y] = [];
          for (let x = 0; x < this.width; x++) {
              grid[y][x] = {
                  top: true, right: true, bottom: true, left: true,
                  visited: false
              };
          }
      }
      return grid;
  }

  generate() {
      // Resetear todas las celdas
      this.grid = this.initializeGrid();
      
      const carvePassage = (x, y) => {
          this.grid[y][x].visited = true;
          const directions = [
              { dx: 0, dy: -1, wall: 'top', opposite: 'bottom' },
              { dx: 1, dy: 0, wall: 'right', opposite: 'left' },
              { dx: 0, dy: 1, wall: 'bottom', opposite: 'top' },
              { dx: -1, dy: 0, wall: 'left', opposite: 'right' }
          ];
          this.shuffleArray(directions);
          
          for (const dir of directions) {
              const newX = x + dir.dx;
              const newY = y + dir.dy;
              if (newX >= 0 && newX < this.width && newY >= 0 && newY < this.height && !this.grid[newY][newX].visited) {
                  this.grid[y][x][dir.wall] = false;
                  this.grid[newY][newX][dir.opposite] = false;
                  carvePassage(newX, newY);
              }
          }
      };

      // Punto de inicio aleatorio
      carvePassage(
          Math.floor(Math.random() * this.width),
          Math.floor(Math.random() * this.height)
      );
  }

  shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  draw(ctx, cellSize = 15) {
      // Limpiar completamente el canvas
            
      ctx.fillStyle = '#ab0033';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      
      // Dibujar paredes
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      
      for (let y = 0; y < this.height; y++) {
          for (let x = 0; x < this.width; x++) {
              const cell = this.grid[y][x];
              const xPos = x * cellSize;
              const yPos = y * cellSize;
              
              if (cell.top) {
                  ctx.beginPath();
                  ctx.moveTo(xPos, yPos);
                  ctx.lineTo(xPos + cellSize, yPos);
                  ctx.stroke();
              }
              if (cell.left) {
                  ctx.beginPath();
                  ctx.moveTo(xPos, yPos);
                  ctx.lineTo(xPos, yPos + cellSize);
                  ctx.stroke();
              }
          }
      }
      
      // Dibujar bordes derecho e inferior
      ctx.beginPath();
      ctx.moveTo(0, this.height * cellSize);
      ctx.lineTo(this.width * cellSize, this.height * cellSize);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(this.width * cellSize, 0);
      ctx.lineTo(this.width * cellSize, this.height * cellSize);
      ctx.stroke();
  }
}

// Inicialización
const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');
const mazeWidth = 80;
const mazeHeight = 13;
const maze = new Maze(mazeWidth, mazeHeight);

// Función para generar y dibujar
function generateAndDrawMaze() {
  maze.generate();
  maze.draw(ctx);
}

// Primera generación
generateAndDrawMaze();

// Reinicio con 'R'
document.addEventListener('keydown', (e) => {
  if (e.key === 'r' || e.key === 'R') {
      generateAndDrawMaze();
  }
});