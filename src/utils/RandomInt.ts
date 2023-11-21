export default function randomIntFromInterval(min: number, max: number) { // From https://stackoverflow.com/a/7228322
    return Math.floor(Math.random() * (max - min + 1) + min)
  }