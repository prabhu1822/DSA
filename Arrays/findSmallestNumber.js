function findSmallest(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) {
    return null
  }

  let small = arr[0];
  for (let i = 0; i < arr.length; i++){
    const value = arr[i];
    if (typeof value !== 'number' || !isFinite(value)) { return false; }
    if (small === undefined || value < small ) {
      small = value;
    }
  }
  return small;
}

module.exports = { findSmallest };