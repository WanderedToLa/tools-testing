// 예외 발생 여부 체크

function ThrowUserCheck(id) {
  if (id <= 0) throw new Error("Invalid ID");
  return {
    id,
    email: `user${id}@test.com`,
  };
}

test("id 에 음수가 들어올 경우 예외 처리", () => {
  expect(() => {
    ThrowUserCheck(-1);
  }).toThrow();
  expect(() => {
    ThrowUserCheck(-1);
  }).toThrow("Invalid ID");
});
