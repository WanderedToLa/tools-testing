let sum: number = 0;
let time: number = 0;

function ATM(...p: number[]) {
  const arr: number[] = [...p];
  arr.sort();
  for (let i = 0; i <= arr.length; i++) {
    sum += i;
    time += sum;
  }
  return time;
}

test("오름차순으로 정렬 후 누적 합 계산", () => {
  expect(ATM(3, 1, 2, 5, 4)).toStrictEqual(35);
});
