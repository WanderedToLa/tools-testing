// 정규식 기반의 테스트

function getToMatchUser(id) {
  return {
    id,
    email: `user${id}@test.com`,
  };
}

test("String check", () => {
  expect(getToMatchUser(1).email).toBe("user1@test.com");
  expect(getToMatchUser(2).email).toMatch(/.*test.com$/);
});
