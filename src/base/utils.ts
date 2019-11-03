export function Uid(len?: number): string {
  len = len || 7
  return Math.random()
    .toString(35)
    .substr(2, len)
}
