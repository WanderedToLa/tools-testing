// test('테스트에 대한 설명' , () => {
//     expect(검증대상).toBe(기대 결과)
// })

test("1 is 1", () => {
  expect(1).toBe(1);
});

/**
 * @description Matcher
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
