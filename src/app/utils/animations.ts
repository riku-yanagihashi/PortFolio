export const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t
}

export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}


