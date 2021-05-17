class Magician {
  constructor(magic) {
    this.name = `The Great ${magic.name}`
    this.assistant = magic.assistant
    this.favoriteAccessory = magic.favoriteAccessory || 'top hat'
  }
}

module.exports = Magician;
