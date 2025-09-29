import { useState } from "react"
import cl from "./Counter.module.scss"

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1 className={cl.head1}>{count}</h1>
      <button className={cl.btn} onClick={increment}>INCREMENT</button>
    </>
  )
}
