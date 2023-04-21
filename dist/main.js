"use strict";
class Dino {
    constructor() {
        this._jump = 1;
        this._speed = 1;
        this._jump = this._jump;
        this._speed = this._speed;
    }
    get speed() {
        return this._speed;
    }
    set speed(num) {
        if (num > 0)
            this._speed = num;
    }
    get get_jump() {
        return this._jump;
    }
    set set_jump(num) {
        if (num > 0)
            this._jump = num;
    }
}
const dino = new Dino();
dino.speed = 20;
console.log(dino.speed);
