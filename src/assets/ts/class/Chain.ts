import rand from "../utils/random";
import Character from "./Character";

const CHARS_LIST : Array<string> = [...'jim est moche']

const COLORS : Array<string> = ['#fff', '#8fff80', '#38ff3c', '#00ff19', '#00c320', '#008823', '#00692d', '#004d30', '#002b23', '#001b1c', '#00000000']
// const COLORS : Array<string> = ['#98c7ff', '#e3e1ff', '#feffe7', '#f8ff8a', '#ffc82d', '#ff8d00', '#ff1c1c', '#960000', '#580000', '#330000', '#00000000']
 //const COLORS : Array<string> = [`rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, 1)`, `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, .9)`, `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, .8)`, `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, .7)`, `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, .6)`, `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, .5)`, `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, .4)`, `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, .3)`, `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, .2)`, `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, .1)`, `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, 0)`]

class Chain {
  #lsChars : Array<Character>
  #node : HTMLDivElement
  #isRunning : boolean;

  constructor () {
    this.#lsChars = new Array<Character>()

    this.#node = document.createElement('div')
    this.#node.classList.add('chain')
    
    for (let i = 0; i < 80; i++) {
      this.#lsChars[i] = new Character()
      this.#node.appendChild(this.#lsChars[i].node)
    }
    document.body.appendChild(this.#node)

    this.#isRunning = false
  }

  get isRunning () {
    return this.#isRunning
  }

  private sizingChain (count: number, n: number) {
    if (count > 9 + n + 1) this.#lsChars[count - (10 + n + 1)].color = COLORS[10]
    // --------------------------------------------------------------------------------------------------------
    if (count > 8 + n + 1) this.#lsChars[count - (9 + n + 1)].color = COLORS[9]
    // --------------------------------------------------------------------------------------------------------
    if (count > 7 + n + 1) this.#lsChars[count - (8 + n + 1)].color = COLORS[8]
    // --------------------------------------------------------------------------------------------------------
    if (count > 6 + n + 1) this.#lsChars[count - (7 + n + 1)].color = COLORS[7]
    // --------------------------------------------------------------------------------------------------------
    if (count > 5 + n + 1) this.#lsChars[count - (6 + n + 1)].color = COLORS[6]
    // --------------------------------------------------------------------------------------------------------
    for (let i = 1; i <= n; i++) {
      if (count > 4 + i) this.#lsChars[count - (5 + i)].color = COLORS[5]
    }
    // --------------------------------------------------------------------------------------------------------
    if (count > 4) this.#lsChars[count - 5].color = COLORS[5]
    // --------------------------------------------------------------------------------------------------------
    if (count > 3) this.#lsChars[count - 4].color = COLORS[4]
    // --------------------------------------------------------------------------------------------------------
    if (count > 2) this.#lsChars[count - 3].color = COLORS[3]
    if (count > 2) this.#lsChars[count - 3].blur = 'none'
    // --------------------------------------------------------------------------------------------------------
    if (count > 1) this.#lsChars[count - 2].color = COLORS[2]
    if (count > 1) this.#lsChars[count - 2].blur = COLORS[2] + ' 0 0 10px'
    // --------------------------------------------------------------------------------------------------------
    if (count > 0) this.#lsChars[count - 1].color = COLORS[1]
    if (count > 0) this.#lsChars[count - 1].blur = COLORS[1] + ' 0 0 10px, #8fff80 0 0 10px'
    // --------------------------------------------------------------------------------------------------------
    this.#lsChars[count].blur = COLORS[0] + ' 0 0 10px, #fff 0 0 10px, #fff 0 0 10px'
    this.#lsChars[count].color = COLORS[0]
    this.#lsChars[count].char = CHARS_LIST[Math.floor(Math.random() * CHARS_LIST.length)]
  }

  public raining () {
    this.#isRunning = true
    let count = 0
    const inter = setInterval(() => {
      if (count === this.#lsChars.length - 1) {
        this.#isRunning = false
        clearInterval(inter)
      }
      if (count < this.#lsChars.length - 2) {
        this.sizingChain(count, rand(1, 5))
      }
      count++
    }, 100)
  }
}

export default Chain