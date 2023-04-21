class Dino {
  private _jump_mt: number = 1;
  private _speed_num: number = 1;

  constructor() {
    this._jump_mt = this._jump_mt;
    this._speed_num = this._speed_num;
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
  jump() {
    //jump by press space key and _jump_mt
  }
  trees_moving() {
    //handle trees moving with ._speed_num
    //handle trees random size 
    //handle cloudes moving with ._speed_num
    //increase speed every minute
  }
  gameOver() {
    //check game over!
  }
  restartGame(){
    //restart whole game
  }
  score(){
    //claculate scores
    //show scores on board
  }
}
const dino = new Dino();
