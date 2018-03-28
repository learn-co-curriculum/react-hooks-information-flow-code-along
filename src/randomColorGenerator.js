export function getReducedColor(color) {
  // jank you kindly
  return '#' + color.split('').slice(1).map(c => (parseInt(c, 16) + 2).toString(16)).join('')
}

export function getRandomColor() {
  const letters = '123456789AB' // <-- cutting off top end so we can lighten the color twice with 'reduceColor'
  let color = '#'
  for (let i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 11)]
  }
  return color
}

// this isn't being used but is minorly dank and untested
export function getRandomColorTree(tierCount, tiers=[getRandomColor()]) {
  if (tierCount === 0) return tiers
  tiers.push(getReducedColor(tiers[tiers.length - 1]))
  return getRandomColorTree(--tierCount, tiers)
}
