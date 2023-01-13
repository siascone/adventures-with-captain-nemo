import Cat from './cat'

class Game {
    constructor(canvas) {
        this.context = canvas.getContext('2d')
        this.dimensions = {
            width: canvas.width,
            height: canvas.height
        }
        this.rightPressed = false
        this.leftPressed = false
        this.restart();
    }

    play() {
        this.running = true;
        this.animate();
    }

    restart() {
        this.running = false;
        this.cat = new Cat(this.dimensions);

        this.animate();
    }

    animate() {
        this.cat.animate(this.context)
        // if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
        // }
    }


    keyDown(e) {
       if (e.key == 'Right' || e.key == 'ArrowRight') {
            this.rightPressed = true
       } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
            this.leftPressed = true
       } 
    }

    keyUp(e) {
       if (e.key == 'Right' || e.key == 'ArrowRight') {
            this.rightPressed = false
       } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
            this.leftPressed = false
       } 
    }
}

Game.WIDTH = 780
Game.HEIGTH = 520

export default Game;