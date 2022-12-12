// test('테스트에 대한 설명' , () => {
//     expect(검증대상).toBe(기대 결과)
// })

test("1 is 1", () => {
  expect(1).toBe(1);
});

/**
 * @description Matcher toBe 대신 toEqual , toStrictEqual 사용하도록 권장
 */

function getUser(id) {
  return {
    id,
    email: `user${id}@test.com`,
  };
}

test("user의 정보를 반환합니다.", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});

test(`number 0 is false but string '0' is true`, () => {
  expect(0).toBeFalsy(); // false로 간주 되는경우 test 통과
  expect("0").toBeTruthy(); // true 로 간주
});
