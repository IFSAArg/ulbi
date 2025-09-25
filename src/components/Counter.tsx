import { useState } from "react"
import "./Counter.scss"

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>INCREMENT</button>
    </>
  )
}
