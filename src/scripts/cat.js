const CONSTANTS = {
    GRAVITY: 0.4,
    JUMP_SPEED: 8,
    TERMINAL_VELOCITY: 12,
    CAT_WIDTH: 25,
    CAT_HEIGHT: 50
}


class Cat {
    constructor(dimension) {
        this.dimensions = dimension;
        this.x = this.dimensions.width - 400;
        this.y = this.dimensions.height - 50;
        this.velocity = 0;
    }

    animate(context) {
        // this.moveCat();
        this.drawCat(context);
    }

    drawCat(context) {
        context.fillStyle = 'lightgray';
        context.fillRect(this.x, this.y, CONSTANTS.CAT_WIDTH, CONSTANTS.CAT_HEIGHT)
    }

    moveCat() {
        this.y += 3;
        // this.velocity += CONSTANTS.GRAVITY;

        // if (Math.abs(this.velocity) > CONSTANTS.TERMINAL_VELOCITY) {
        //     if (this.velocity > 0) {
        //         this.velocity = CONSTANTS.TERMINAL_VELOCITY;
        //     } else {
        //         this.velocity = CONSTANTS.TERMINAL_VELOCITY * -1;
        //     }
        // }
    }

    bounds() {
        return {
            left: this.x,
            right: this.x + CONSTANTS.CAT_WIDTH,
            top: this.y,
            bottom: this.y + CONSTANTS.CAT_HEIGHT
        }
    }
}

export default Cat;