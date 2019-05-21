
const isEqual = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime()
  }
  if (a === null || b === undefined) return false;
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  if (!a || !b || typeof a !== 'object') return a === b;
  if (a.prototype !== b.prototype) return false;
}