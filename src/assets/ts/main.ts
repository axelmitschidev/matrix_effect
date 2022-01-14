import Chain from './class/Chain'
import rand from './utils/random'

const lsChains = new Array<Chain>()
for (let i = 0; i < 170; i++) {
  lsChains[i] = new Chain()
}


function chainLaunch () {
  lsChains.forEach(chain => {
    if (rand(1, 100) < 3 && !chain.isRunning) {
      chain.raining()
    }
  })
  requestAnimationFrame(chainLaunch)
}

chainLaunch()

