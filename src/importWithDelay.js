export default function importWithDelay(value, ms = 1000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}
