import React from "react"
import Joke from "./joke"
import jokeData from "./jokeData"
import "./styles.css"

export default function App() {
  const jokeElems = jokeData.map(joke => {
      return <Joke setup={joke.setup} punchline={joke.punchline} />
  })
  return (
    <div className="main">
      {jokeElems}
    </div>
  )
}

