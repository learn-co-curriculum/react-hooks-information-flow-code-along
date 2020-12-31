// Nothing in this file needs to be altered (but it is your solution so feel free to!)
export function getRandomColor() {
  // this function generates a random hex color from the letters below
  const letters = "123456789AB"; // <-- cutting off top end so we get lighter colors
  let color = "#";
  for (let i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 11)];
  }
  return color;
}
