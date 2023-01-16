import "@testing-library/jest-dom";
import { calculateTotalPoints, getMonths } from "./Util";

let oneTransactions = [
  { customerId: 0, purchaseAmount: 100, date: new Date("01/15/2023") },
];

let twoTransactions = [
  { customerId: 0, purchaseAmount: 100, date: new Date("01/15/2023") },
  { customerId: 0, purchaseAmount: 100, date: new Date("12/15/2022") },
];

let twoCustomer = [
  { customerId: 0, purchaseAmount: 100, date: new Date("01/15/2023") },
  { customerId: 1, purchaseAmount: 100, date: new Date("01/15/2023") },
];

let highTransactionAmount = [
  { customerId: 0, purchaseAmount: 1000, date: new Date("01/15/2023") },
];

test("calculate total points with one transaction", () => {
  let temp = calculateTotalPoints(oneTransactions);
  expect(temp).toEqual([{ customerId: 0, 0: 50, totalPoint: 50 }]);
});

test("calculate total points with two transaction", () => {
  let temp = calculateTotalPoints(twoTransactions);
  expect(temp).toEqual([{ customerId: 0, 0: 50, 11: 50, totalPoint: 100 }]);
});

test("calculate total points with two customer", () => {
  let temp = calculateTotalPoints(twoCustomer);
  expect(temp).toEqual([
    { customerId: 0, 0: 50, totalPoint: 50 },
    { customerId: 1, 0: 50, totalPoint: 50 },
  ]);
});

test("calculate total points with high transaction", () => {
  let temp = calculateTotalPoints(highTransactionAmount);
  expect(temp).toEqual([{ customerId: 0, 0: 1850, totalPoint: 1850 }]);
});

test("getMonths 1 month", () => {
    let temp = getMonths(1, 1)
    expect(temp).toEqual({monthIndex: [1], monthName: ["February"]})
}) 

test("getMonths multiple month", () => {
    let temp = getMonths(3, 3)
    expect(temp).toEqual({monthIndex: [1,2,3], monthName: ["February", "March", "April"]})
}) 

test("getMonths multiple month backward", () => {
    let temp = getMonths(0, 3)
    expect(temp).toEqual({monthIndex: [10,11,0], monthName: ["November", "December", "January"]})
}) 