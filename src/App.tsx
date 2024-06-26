import { useState } from 'react'
import * as Styled from "./AppStyle"
import Button from './components/Button'

function App() {

  const [count, setCount] = useState(0)
  const [isBlack, setIsBlack] = useState(false)

  const handleNewCount = () => {
    setCount(count + 1)
  }

  const handleDeleteCount = () => {
    if(count == 0){
      alert("Contador não pode ser negativo!")
      return
    }

    setCount(count - 1)
  }

  function changeBackgroundColor(a : boolean) {
    setIsBlack(a)
  }

  return (
    <div>
    <Styled.globalStyle isBlack={isBlack}/>

      <Styled.Header>
        <Button 
          changeBackgroundColor={changeBackgroundColor}
          content={isBlack ? "white" : "black"}
          isBlack={isBlack} />
      </Styled.Header>

        <Styled.Principal>

          <Styled.Filhos onClick={handleDeleteCount}>
            -
          </Styled.Filhos >

          <Styled.Filhos onClick={handleDeleteCount}>
            <span>{count}</span>
          </Styled.Filhos >

          <Styled.Filhos onClick={handleNewCount}>
            +
          </Styled.Filhos >
        
        </Styled.Principal>

    </div>
  )
}

export default App;

