let transactions = [
  { customerId: 0, purchaseAmount: 100, date: new Date("01/15/2023") },
  { customerId: 0, purchaseAmount: 200, date: new Date("12/15/2022") },
  { customerId: 0, purchaseAmount: 50, date: new Date("6/15/2022") },
  { customerId: 1, purchaseAmount: 100, date: new Date("01/15/2023") },
  { customerId: 1, purchaseAmount: 200, date: new Date("12/15/2022") },
  { customerId: 1, purchaseAmount: 50, date: new Date("6/15/2022") },
  { customerId: 2, purchaseAmount: 100, date: new Date("01/15/2023") },
  { customerId: 2, purchaseAmount: 200, date: new Date("12/15/2022") },
  { customerId: 2, purchaseAmount: 50, date: new Date("6/15/2022") },

];

export async function getTransactions(date, numMonth) {
  return transactions.filter((ele) => {
    if (ele.date.getYear() > date.getYear()) {
        return false
    } 
    if (ele.date.getYear() === date.getYear() && ele.date.getMonth() > date.getMonth) {
        return false
    }
    let diffYear = date.getYear() - ele.date.getYear();
    return (date.getMonth() + (diffYear * 12)) - ele.date.getMonth() < numMonth;
  });
}
