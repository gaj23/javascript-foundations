class Magician {
  constructor(magic) {
    this.name = `The Great ${magic.name}`
    this.assistant = magic.assistant
    this.favoriteAccessory = magic.clothing || 'top hat'
    this.confidencePercentage = 10
    this.assistant = false || magic.assistant
    this.happyCrowd = true
  }

  performIncantation = magicWords => {
    return `${magicWords.toUpperCase()}!`
  }

  performTrick = () => {
    this.confidencePercentage += 10

    switch (this.favoriteAccessory) {
      case 'top hat':
        return 'PULL RABBIT FROM TOP HAT'
      default:
        return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper = () => {
    if (this.confidencePercentage >= 100 && this.assistant === true) {
      return 'WOW! The magician totally just sawed that person in half!' }
    else {
      this.happyCrowd = false
      return 'Oh no, this trick is not ready!'
    }
  }
}

module.exports = Magician;
