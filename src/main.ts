class Dino {
  private _jump_mt: number = 1; //*130
  private _jump_sec: number = 1; //*1.5
  private _speed_num: number = 1;
  private _trees: HTMLImageElement[] = <HTMLImageElement[]>[
    document.getElementById("tree-one"),
    document.getElementById("tree-two"),
    document.getElementById("tree-three"),
  ];
  readonly header_text_one: string = "T-Rex Chrome Dino Game";
  readonly text_one: string =
    "T-Rex Dinosaur - a replica of the hidden game from Chrome offline mode. Press Space to start the game online and jump your Dino, use down arrow (↓) to duck.";
  private readonly _t_rex = document.getElementById(
    "t_rex"
  ) as HTMLImageElement;
  constructor() {
    this._jump_mt = this._jump_mt;
    this._jump_sec = this._jump_sec;
    this._speed_num = this._speed_num;
    this._trees = this._trees;
    this.game_logic_control();
  }
  get jump_sec(): number {
    return this._jump_sec;
  }
  set jump_sec(second: number) {
    if (second > 0) {
      this._jump_sec = second;
      this._t_rex.style.animationDuration = this._jump_sec + "s";
    }
  }
  get speed(): number {
    return this._speed_num;
  }
  set speed(num: number) {
    if (num > 0) {
      this._speed_num = num;
      document.documentElement.style.setProperty(
        "--ground-speed",
        (1 / this._speed_num) * 3.3 + "s"
      );
      document.documentElement.style.setProperty(
        "--trees-speed",
        (1 / this._speed_num) * 6 + "s"
      );
      document.documentElement.style.setProperty(
        "--cloud-speed",
        (1 / this._speed_num) * 30 + "s"
      );
      this._jump_sec = this._jump_sec - (this._speed_num - 1) * 0.2;
      this._t_rex.style.animationDuration = this._jump_sec + "s";
    }
  }
  get jump_mt(): number {
    return this._jump_mt;
  }
  set jump_mt(meter: number) {
    if (meter > 0) {
      this.jump_mt = meter;
      document.documentElement.style.setProperty(
        "--min",
        "-" + this._jump_mt * 130 + "px"
      );
    }
  }
  game_logic_control() {
    this._t_rex.style.animationDuration = this.jump_sec * 1.5 + "s";
    document.documentElement.style.setProperty(
      "--min",
      "-" + this._jump_mt * 130 + "px"
    );
    document.documentElement.style.setProperty(
      "--max",
      "-" + (this._jump_mt * 130 + 20) + "px"
    );
    this.ground_dots_moving();
    this.jump();
    this.gameOver();
  }
  jump() {
    //jump by press space key (jump_mt & jump_sec)
    document.documentElement.addEventListener("keydown", () => {
      this._t_rex.classList.add("jump");
      setTimeout(() => {
        this._t_rex.classList.remove("jump");
      }, (this._jump_sec * 1.5 - 0.15) * 1000);
    });
  }
  ground_dots_moving() {
    for (let i = 1; i < 500; i++) {
      const newDot: HTMLHRElement = <HTMLHRElement>document.createElement("hr");
      const dot_top: string = Math.floor(Math.random() * 10) + 252 + "px";

      const ani_delay: string = Math.random() * 10 + "s";
      newDot.classList.add("dot", "z-10");
      newDot.style.animationDelay = ani_delay;
      newDot.style.top = dot_top;
      const dots = document.getElementById("dots");
      dots?.appendChild(newDot);
    }
  }
  gameOver() {
    //check game over!
    const check_collision: NodeJS.Timer = setInterval(() => {
      for (let i = 0; i < this._trees.length; i++) {
        if (
          this._trees[i]?.getBoundingClientRect().left <
            this._t_rex.getBoundingClientRect().right &&
          this._trees[i]?.getBoundingClientRect().right >
            this._t_rex.getBoundingClientRect().left &&
          this._trees[i]?.getBoundingClientRect().top <
            this._t_rex.getBoundingClientRect().bottom
        ) {
          console.log("game crashed!");
          this.stop_animation();
          clearInterval(check_collision);
        }
      }
    }, 100);
  }
  stop_animation() {
    this._t_rex.style.display = "none";
    const game_over:HTMLImageElement =<HTMLImageElement>document.getElementById("game_over");
    game_over.style.display = "block";
    for (let i = 0; i < this._trees.length; i++) {
      //pusing trees
      this._trees[i].style.animationPlayState = "paused";
    }
    const clouds = document.getElementById("clouds")?.children;
    if (clouds !== undefined)
      for (let i: number = 0; i < clouds.length; i++) {
        //pusing clouds
        const cloud: HTMLImageElement = <HTMLImageElement>clouds?.[i];
        cloud.style.animationPlayState = "paused";
      }
    const dots = document.getElementById("dots")?.children;
    if (dots !== undefined)
      for (let i: number = 0; i < dots.length; i++) {
        //pusing clouds
        const dot: HTMLDivElement = <HTMLDivElement>dots?.[i];
        dot.style.animationPlayState = "paused";
      }
  }
  restartGame() {
    //restart whole game
  }
  score() {
    //claculate scores
    //show scores on board
  }
}
const dino = new Dino();
