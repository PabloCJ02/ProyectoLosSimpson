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
          <div class="texto">
          {isLoading && <p>Loading</p>}
          <p>The simpsooon!!!</p>
          <ul>
            {quotes.map(({ character }) => (
              <p key={character} style={{ fontSize: '25px', textAlign: 'center'}} > <strong>{character} says... </strong> </p>
            ))}
          </ul>

          <ul>
            {quotes.map(({ quote }) => (
              <p style={{ fontSize: '20px', textAlign: 'center', color: 'black'}} key={quote} > <strong>{quote}</strong></p>
            ))}
          </ul>

          <ul>
            {quotes.map(({ image, character }) => (
              <div style={{ textAlign:'center'}}>
                <img key={character} src={image} alt={character} style={{ width: '100', height: '100'}}></img>
              </div>
            ))}
          </ul>
          </div>
        </div>
      </main>
    </p>
  )
}