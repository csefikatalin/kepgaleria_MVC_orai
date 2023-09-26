import { KEPLISTA } from "./adat.js";
class Modell {
  #lista = [];
  #id;
  constructor() {
    //ez jellemzi a programunk aktuális állapotát
    this.#lista = KEPLISTA;
    this.#id = 0;
  }
  getList() {
    return this.#lista;
  }
  getAktKep() {
    return this.#lista[this.#id];
  }
  jobb() {
    //növeli az ID értékét
    this.#id++;
    if (this.#id >= this.#lista.length) {
      this.#id = 0;
    }
  }
  bal() {
    //növeli az ID értékét
    this.#id--;
    if (this.#id < 0) {
      this.#id = this.#lista.length - 1;
    }
  }
}
export default Modell;
