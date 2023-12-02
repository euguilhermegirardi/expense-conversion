import axios from "axios"

const apiKey = "aeac0a7c61a8d15d26265e39"

export async function convertToReal(
  amount,
  fromCurrency,
  toCurrency = "BRL"
) {
  const apiUrl = `https://open.er-api.com/v6/latest?api_key=${apiKey}&base=${fromCurrency}&symbols=${toCurrency}`

  try {
    const response = await axios.get(apiUrl)

    if (response.status === 200) {
      const rate = response.data.rates[toCurrency]
      const convertedAmount = (amount * rate).toFixed(2)
      return convertedAmount
    } else {
      throw new Error(response.data.error.info)
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
