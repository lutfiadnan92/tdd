import { additionService } from "./addition.service"

describe("addition function", () => {
  test("return 2 when 1 + 1 === 2", () => {
    const a = 1
    const b = 1
    const result = additionService(a, b)
    const output = 2
    expect(result).toEqual(output)
  })
})
