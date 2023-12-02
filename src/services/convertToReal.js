const apiKey = "aeac0a7c61a8d15d26265e39"

export async function convertToReal(
  amount,
  fromCurrency,
  toCurrency = "BRL"
) {
  const apiUrl = `https://open.er-api.com/v6/latest?api_key=${apiKey}&base=${fromCurrency}&symbols=${toCurrency}`

  try {
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status}`
      )
    }

    const responseData = await response.json()

    const rate = responseData.rates[toCurrency]
    const convertedAmount = (amount * rate).toFixed(2)

    return convertedAmount
  } catch (error) {
    throw new Error(error.message)
  }
}
