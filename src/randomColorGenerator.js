// Nothing in this file needs to be altered (but it is your solution so feel free to!)

export function getReducedColor(color) {
  // this takes in a color: "#324" and returns a lighter shade of the same color
  return '#' + color.split('').slice(1).map(c => (parseInt(c, 16) + 2).toString(16)).join('') // jank you kindly
}

export function getRandomColor() {
  // this function generates a random hex color from the letters below
  const letters = '123456789AB' // <-- cutting off top end so we can lighten the color twice with 'reduceColor'
  let color = '#'
  for (let i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 11)]
  }
  return color
}

export function getRandomColorTree(tierCount, tiers=[getRandomColor()]) {
  // this isn't being used but is minorly dank and untested
  if (tierCount === 0) return tiers
  tiers.push(getReducedColor(tiers[tiers.length - 1]))
  return getRandomColorTree(--tierCount, tiers)
}
