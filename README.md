# Start Jest

- `npm i --save-dev @types/jest`
- 테스트 코드를 작성하는 이유? 22.12.26

## package.json

```javascript
 "scripts": {
    "test": "jest"
  },
```

## test.ts

```javascript
// test('테스트에 대한 설명' , () => {
//     expect(검증대상).toBe(기대 결과)
// })

test("1 is 1", () => {
  expect(1).toBe(1);
});
```

## Run Jest

- `npm test`
- 특정 파일만 실행 시키고 싶은 경우 `npm test <특정 파일명>`
