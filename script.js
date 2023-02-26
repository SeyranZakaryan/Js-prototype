function Animal(name) {
    name = "";
    eat: true;
    dink: true;
    this.numEyes = 2;
    this.numFoot = 4;
}
function Katnasun() {
    this.katov_snvel = true;
    this.__proto__= Animal();
}
function Dog(name) {
    this.name = name;
    this.speak = "hachal";
    this.snund = "mis";
    this.__proto__ = Katnasun();
}
// function Exjeravor(snund) {
//     this.hasExjyur = true;
//     this.snund = "buys";
// }
// function Exnik() {
//     this.exjyur = 30;
//     this.__proto__ = Exjeravor();

// }

const animal = new Animal();
const katnasun = new Katnasun();
const dog = new Dog("Rex");



// const horse = new Exjeravor();
// const exnik = new Exnik();













