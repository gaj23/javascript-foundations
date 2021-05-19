var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(stone) {
    this.name = stone.name === undefined ? 'Medusa' : stone.name
  }
  // this one was weird and I forget what it was weird; it had to do with the passing of an object into the constructor, though. 
}

module.exports = Medusa;
