export function calculator(bill, tip, billDividedBy) {
  let calculatedTip = 0
  let total = 0
  let perPerson = 0

  if (bill > 0) {
    calculatedTip = parseFloat(
      ((bill * tip) / 100).toFixed(2)
    )

    total = parseFloat((bill + calculatedTip).toFixed(2))

    perPerson = parseFloat(
      (total / billDividedBy).toFixed(2)
    )
  }

  return {
    calculatedTip,
    total,
    perPerson,
  }
}
