"use strict";
class Dino {
    constructor() {
        this._jump_mt = 1;
        this._speed_num = 1;
        this.header_text_one = "T-Rex Chrome Dino Game";
        this.text_one = "T-Rex Dinosaur - a replica of the hidden game from Chrome offline mode. Press Space to start the game online and jump your Dino, use down arrow (↓) to duck.";
        this._t_rex = document.getElementById("t_rex");
        this._jump_mt = this._jump_mt;
        this._speed_num = this._speed_num;
        this.game_logic_control();
    }
    get speed() {
        return this._speed_num;
    }
    set speed(num) {
        if (num > 0)
            this._speed_num = num;
    }
    get jump_mt() {
        return this._jump_mt;
    }
    set jump_mt(num) {
        if (num > 0)
            this._jump_mt = num;
    }
    game_logic_control() {
        var _a;
        this.ground_dots_moving();
        (_a = document.getElementById("body")) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', () => {
            this.jump();
            setTimeout(() => {
                this._t_rex.classList.remove('jump');
            }, 1200);
        });
    }
    jump() {
        this._t_rex.classList.add("jump");
    }
    trees_moving() {
    }
    ground_dots_moving() {
        for (let i = 1; i < 500; i++) {
            const newDot = document.createElement("hr");
            const dot_top = Math.floor(Math.random() * 10) + 252 + "px";
            const ani_delay = Math.random() * 10 + "s";
            newDot.classList.add("dot", "z-10");
            newDot.style.animationDelay = ani_delay;
            newDot.style.top = dot_top;
            const dots = document.getElementById("dots");
            dots === null || dots === void 0 ? void 0 : dots.appendChild(newDot);
        }
    }
    gameOver() {
    }
    restartGame() {
    }
    score() {
    }
}
const dino = new Dino();
