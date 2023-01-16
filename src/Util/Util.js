// given an array of transactions it return an array of objects that calculates the total points each month for each customer
export function calculateTotalPoints(transactions) {
  // using a map to help with runtime
  let temp = new Map();

  // looping over every transaction
  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    let customerId = transaction.customerId;

    let calculatedPoints;
    if (temp.has(customerId)) {
      // if we've already seen this customer we just update the existing entry
      calculatedPoints = temp.get(customerId);
      // if the we haven't seen the month before we initialize the total point that month to 0
      if (!calculatedPoints[transaction.date.getMonth()]) {
        calculatedPoints[transaction.date.getMonth()] = 0
      }
      calculatedPoints[transaction.date.getMonth()] += calculatePoints(
        transaction.purchaseAmount
      );
      calculatedPoints.totalPoint += calculatePoints(
        transaction.purchaseAmount
      );
    } else {
      // if we haven't seen this customer we create a new entry
      calculatedPoints = {
        [transaction.date.getMonth()]: calculatePoints(
          transaction.purchaseAmount
        ),
        totalPoint: calculatePoints(transaction.purchaseAmount),
      };
    }
    temp.set(customerId, calculatedPoints);
  }

  // convert the map to an array
  return convertToArray(temp)
}

// this function takes in the currMonth, and number of months we're looking for
// it returns the index and name of the last "numMonths" of months counting from the currMonth
export function getMonths(currMonth, numMonths) {
  let monthIndex = []
  let monthName = []

  // adding the last "numMonths" of months to the array
  for (let i = numMonths - 1; i >= 0; i--) {
    monthIndex.push((currMonth + 12 - i) % 12)
    monthName.push(getMonthName((currMonth + 12 - i) % 12))
  }
  return {monthIndex: monthIndex, monthName: monthName}
}

// a helper function that convert the months from index to name
function getMonthName(monthIndex) {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return month[monthIndex]
}

// a helper function to calculate the number of points from the purchase
function calculatePoints(purchaseAmount) {
  let points = 0;
  points += Math.max((purchaseAmount - 100) * 2, 0);
  points += Math.max((Math.min(purchaseAmount, 100) - 50) * 1, 0);
  return points;
}

// a helper function to convert from a map to an array
function convertToArray(Map) {
  let array = [];
  for (const [key, value] of Map) {
    array.push({ customerId: key, ...value });
  }
  return array;
}
