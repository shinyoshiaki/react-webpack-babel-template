import "@babel/polyfill";

export default class ComlinkClass {
  seed?: string;
  async setSeed(seed: string) {
    console.log({ seed });
    this.seed = seed;
  }

  async getHash(s: string) {
    return this.seed + s;
  }
}
