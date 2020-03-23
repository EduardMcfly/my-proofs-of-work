/**
 * @typedef  {{x:number,y:number}} Movement
 */
/**
 * @param movements {Movement[]}
 */
function getDistance(movements) {
  return movements.reduce(
    (previousValue, { x, y }) => previousValue + x + y,
    0
  );
}

/**
 * @param movements {Movement[]}
 */
function getAverageDistance(movements) {
  const distanceTotal = getDistance(movements);
  return distanceTotal / movements.length;
}

const average = getAverageDistance([
  { x: 10, y: 15 },
  { x: 15, y: 20 },
  { x: 7, y: 13 },
  { x: 8, y: 9 }
]);
// -> 24.25;
