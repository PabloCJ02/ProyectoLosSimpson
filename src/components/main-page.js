import React from "react"
import { getQuotes } from "../services"


export const MainPage = () => {
  const [quotes, setQuotes] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(
    () => 
      getQuotes()
        .then(response => response.json())
        .then(data => setQuotes(data)),
    []
  )

  return (
    <p>
    <main class="gradient-border">
      <div class="box">
      <img class="img-responsive center-block" src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2Fsimpsons.PNG?1497481539770"></img>
        <div class="container">
          <div class="hair-top"></div>
          <div class="hair-top left"></div>
          <div class="forehead"></div>
          <div class="eye">
            <div class="pupil right"></div>
          </div>
          <div class="eye left">
            <div class="pupil"></div>
          </div>
          <div class="nose"></div>
          <div class="cheeck"></div>
          <div class="beard"></div>
          <div class="smile"></div>
          <div class="neck"></div>
          <div class="neck-bottom"></div>
          <div class="v-neck"></div>
          <div class="shirt-left"></div>
          <div class="shirt-right"></div>
          <div class="body"></div>
          <div class="shoulder-left"></div>
          <div class="shoulder-right"></div>
        </div>
        <div class="texto">
        {isLoading && <p>Loading</p>}
        <p>The simpsooon!!!</p>
        <ul>
          {quotes.map(({quote}) => (
            <li key={quote}>{quote}</li>
          ))}
        </ul>
        </div>
      </div>
    </main>
    </p>
  )
}