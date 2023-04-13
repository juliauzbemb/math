export default class Character {
  constructor(name, type, attack) {
    this.name = name;
    this.type = type;
    this.attack = attack;
  }

  get stoned() {
    return this.attack;
  }

  set stoned(x) {
    this.attack = Math.round(this.attackValue - (Math.log2(x) * 5));
  }

  get attackValue() {
    return this.attack;
  }

  set attackValue(x) {
    this.attack = Math.round((this.attack * (-0.1 * x + 1.1)));
  }
}
