var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor({ name }) {
    this.name = name
    this.statues = []
  }

  gazeAtVictim = (victim) => {
    const todaysVictim = new Statue(victim.name)
    if (this.statues.length < 3) {
      this.statues.push(todaysVictim)
    } else {
      let freedPerson = this.statues.shift()
      freedPerson = new Person(freedPerson.name)
      freedPerson.mood = 'relieved'

      this.statues.push(todaysVictim)

      return freedPerson
    }
  }

}

module.exports = Medusa;
