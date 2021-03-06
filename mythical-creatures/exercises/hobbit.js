class Hobbit {
  constructor(hobbit) {
    this.name = hobbit.name;
    this.favoriteFood = hobbit.favoriteFood;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }

  celebrateBirthday = () => {
    this.age += 1;
    if (this.age >= 33) this.adult = true
    if (this.age > 100) this.old = true
  }

  getRing = () => {
    if (this.name === 'Frodo') {
      this.hasRing = true;
      return 'Here is the ring!'
    } else {
      return 'You can\'t have it!'
    }
  }

  offeredFood = (offer) => {
    if (offer === this.favoriteFood) {
      return `Why, ${offer}, thank you!`
    } else {
      return `${offer} is not my favorite, but thank you very much.`
    }
  }

}

module.exports = Hobbit;
