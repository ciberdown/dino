class Dino {
  private _jump_mt: number = 1;
  private _speed_num: number = 1;
  readonly header_text_one: string = "T-Rex Chrome Dino Game";
  readonly text_one: string =
    "T-Rex Dinosaur - a replica of the hidden game from Chrome offline mode. Press Space to start the game online and jump your Dino, use down arrow (↓) to duck.";
  private readonly _t_rex = document.getElementById(
    "t_rex"
  ) as HTMLImageElement;
  constructor() {
    this._jump_mt = this._jump_mt;
    this._speed_num = this._speed_num;
    this.game_logic_control();
  }
  get speed(): number {
    return this._speed_num;
  }
  set speed(num: number) {
    if (num > 0) this._speed_num = num;
  }
  get jump_mt(): number {
    return this._jump_mt;
  }
  set jump_mt(num: number) {
    if (num > 0) this._jump_mt = num;
  }
  game_logic_control() {
    this.ground_dots_moving();
  }
  jump() {
    //jump by press space key and _jump_mt
  }
  trees_moving() {
    //handle trees moving with ._speed_num
    //handle trees random size
    //handle cloudes moving with ._speed_num
    //increase speed every minute
  }
  ground_dots_moving() {
    for (let i = 1; i < 500; i++) {
      const newDot: HTMLHRElement = <HTMLHRElement>document.createElement("hr");
      const dot_top: string =(Math.floor(Math.random() * 10) + 252) + "px";

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
