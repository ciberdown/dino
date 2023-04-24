"use strict";
class Dino {
    constructor() {
        this._jump_mt = 1;
        this._jump_sec = 1;
        this._speed_num = 1;
        this._trees = [
            document.getElementById("tree-one"),
            document.getElementById("tree-two"),
            document.getElementById("tree-three"),
        ];
        this.header_text_one = "T-Rex Chrome Dino Game";
        this.text_one = "T-Rex Dinosaur - a replica of the hidden game from Chrome offline mode. Press Space to start the game online and jump your Dino, use down arrow (↓) to duck.";
        this._t_rex = document.getElementById("t_rex");
        this._jump_mt = this._jump_mt;
        this._jump_sec = this._jump_sec;
        this._speed_num = this._speed_num;
        this._trees = this._trees;
        this.game_logic_control();
    }
    get jump_sec() {
        return this._jump_sec;
    }
    set jump_sec(second) {
        if (second > 0) {
            this._jump_sec = second;
            this._t_rex.style.animationDuration = this._jump_sec + "s";
        }
    }
    get speed() {
        return this._speed_num;
    }
    set speed(num) {
        if (num > 0) {
            this._speed_num = num;
            document.documentElement.style.setProperty("--ground-speed", (1 / this._speed_num) * 3.3 + "s");
            document.documentElement.style.setProperty("--trees-speed", (1 / this._speed_num) * 6 + "s");
            document.documentElement.style.setProperty("--cloud-speed", (1 / this._speed_num) * 30 + "s");
            this._jump_sec = this._jump_sec - (this._speed_num - 1) * 0.2;
            this._t_rex.style.animationDuration = this._jump_sec + "s";
        }
    }
    get jump_mt() {
        return this._jump_mt;
    }
    set jump_mt(meter) {
        if (meter > 0) {
            this.jump_mt = meter;
            document.documentElement.style.setProperty("--min", "-" + this._jump_mt * 130 + "px");
        }
    }
    game_logic_control() {
        this._t_rex.style.animationDuration = this.jump_sec * 1.5 + "s";
        document.documentElement.style.setProperty("--min", "-" + this._jump_mt * 130 + "px");
        document.documentElement.style.setProperty("--max", "-" + (this._jump_mt * 130 + 20) + "px");
        this.ground_dots_moving();
        this.jump();
        this.gameOver();
    }
    jump() {
        document.documentElement.addEventListener("keydown", () => {
            this._t_rex.classList.add("jump");
            setTimeout(() => {
                this._t_rex.classList.remove("jump");
            }, (this._jump_sec * 1.5 - 0.15) * 1000);
        });
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
        const check_collision = setInterval(() => {
            var _a, _b, _c;
            for (let i = 0; i < this._trees.length; i++) {
                if (((_a = this._trees[i]) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().left) <
                    this._t_rex.getBoundingClientRect().right &&
                    ((_b = this._trees[i]) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().right) >
                        this._t_rex.getBoundingClientRect().left &&
                    ((_c = this._trees[i]) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect().top) <
                        this._t_rex.getBoundingClientRect().bottom) {
                    console.log("game crashed!");
                    this.stop_animation();
                    clearInterval(check_collision);
                }
            }
        }, 100);
    }
    stop_animation() {
        var _a, _b;
        this._t_rex.style.display = "none";
        const game_over = document.getElementById("game_over");
        game_over.style.display = "block";
        for (let i = 0; i < this._trees.length; i++) {
            this._trees[i].style.animationPlayState = "paused";
        }
        const clouds = (_a = document.getElementById("clouds")) === null || _a === void 0 ? void 0 : _a.children;
        if (clouds !== undefined)
            for (let i = 0; i < clouds.length; i++) {
                const cloud = clouds === null || clouds === void 0 ? void 0 : clouds[i];
                cloud.style.animationPlayState = "paused";
            }
        const dots = (_b = document.getElementById("dots")) === null || _b === void 0 ? void 0 : _b.children;
        if (dots !== undefined)
            for (let i = 0; i < dots.length; i++) {
                const dot = dots === null || dots === void 0 ? void 0 : dots[i];
                dot.style.animationPlayState = "paused";
            }
    }
    restartGame() {
    }
    score() {
    }
}
const dino = new Dino();
