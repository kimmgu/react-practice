import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers?limit=3')
      .then((res) => res.json())
      .then((json) => {
        setCoins(json)
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <h1>Coin Tracker {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}) $ {coin.quotes.USD.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
