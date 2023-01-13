import Game from "./scripts/game";


document.addEventListener('DOMContentLoaded', () => {
    const canvasElement = document.querySelector('canvas');
    canvasElement.width = Game.WIDTH;
    canvasElement.height = Game.HEIGTH;
    const game = new Game(canvasElement);
})