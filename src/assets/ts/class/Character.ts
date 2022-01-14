class Character {
  #color: string
  #char: string
  #node: HTMLSpanElement

  constructor () {
    this.#color = '#00000000'
    this.#char = 'o'
    this.#node = document.createElement('span')
    this.#node.classList.add('char')
    this.#node.style.color = this.#color
    this.#node.textContent = this.#char
  }

  set color (color: string) {
    this.#color = color
    this.#node.style.color = this.#color
  }

  get char () {
    return this.#char
  }

  set char (char: string) {
    if (char.length === 1) {
      this.#char = char
      this.#node.textContent = this.#char
    } else {
      throw new Error("Number of character is not equal to 1")
    }
  }

  set blur (blur: string) {
    this.#node.style.textShadow = blur
  }

  get node () {
    return this.#node
  }
}

export default Character