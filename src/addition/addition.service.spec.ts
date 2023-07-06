import { additionService } from "./addition.service"

describe("addition function", () => {
  test("test with positive number", () => {
    const a = 1
    const b = 1
    const result = additionService(a, b)
    const output = 2
    expect(result).toEqual(output)
  })

  test("test with negative number", () => {
    const a = -2
    const b = 3
    const result = additionService(a, b)
    const output = 1
    expect(result).toEqual(output)
  })

  test("test with decimal number", () => {
    const a = 1.5
    const b = 2.5
    const result = additionService(a, b)
    const output = 4
    expect(result).toEqual(output)
  })
})
