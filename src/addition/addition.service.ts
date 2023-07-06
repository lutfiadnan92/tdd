const add = (valueA: number, valueB: number): number => {
  return valueA + valueB
}

const additionService = (valueA: number, valueB: number): number => {
  return add(valueA, valueB)
}

export { additionService }
