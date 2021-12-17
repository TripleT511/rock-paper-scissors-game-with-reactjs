import './index.scss';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Rules from './components/Rules/Rules';
import Result from './components/Result/Result';

import Play from './components/Play/Play';
import { useState, useRef } from 'react';


function App() {
  const getLocal = JSON.parse(localStorage.getItem('Result'))
  const [result, setResult] = useState(() => {
    return getLocal ? getLocal : 0
  });
  const [play, setPlay] = useState(false);
  const [winner, setWinner] = useState([])
  const [rules, setRules] = useState(false)
  let textResult = useRef();
  localStorage.setItem('Result', result);

   // Click Rules
  const handleRules = () => {
    setRules(!rules);
    
  }  
  const typeButton = [{
    name: "Paper",
    cls: "btn__paper",
  },
  {
      name: "Scissors",
      cls: "btn__scissors"
  }
  ,{
      name: "Rock",
      cls: "btn__rock"
    }];
  
  
  // Click Button
  const handleClick = (index) => {
    setPlay(true);
    const random = Math.floor(Math.random() * typeButton.length)
    const YouPicked = typeButton[index].name;
    const HousePicked = typeButton[random].name;
 
  
    if (YouPicked === "Rock") {
      if (HousePicked === "Scissors") {
        textResult.current = "YOU WIN";
        setResult(result + 1)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: true,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: false,
          }
        ])
          }
      else if (HousePicked === "Paper") {
        textResult.current = "YOU CLOSE";
        setResult(result - 1)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: false,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: true,
          }
        ])
      }
      else {
        textResult.current = "DRAW";
        setResult(result)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: false,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: false,
          }
        ])
      }
    } else if (YouPicked === "Paper")
    {
      if (HousePicked === "Scissors") {
        textResult.current = "YOU CLOSE";
        setResult(result - 1)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: false,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: true,
          }
        ])
      }
      else if (HousePicked === "Rock") {
        textResult.current = "YOU WIN";
        setResult(result + 1)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: true,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: false,
          }
        ])
      }
      else {
        textResult.current = "DRAW";
        setResult(result)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: false,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: false,
          }
        ])
      }
    } else {
      if (HousePicked === "Paper") {
        textResult.current = "YOU WIN";
        setResult(result + 1)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: true,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: false,
          }
        ])
      }
      else if (HousePicked === "Rock") {
        textResult.current = "YOU CLOSE";
        setResult(result - 1)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: false,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: true,
          }
        ])
      }
      else {
        textResult.current = "DRAW";
        setResult(result)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: false,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: false,
          }
        ])
      }
    }
  } 

  // Click Play Again
  const handlePlayAgain = () => {
      setPlay(!play);
    }
  return (
    <div className="container">
      <Header result={result} />
      <main>
        {
          !play && <Play>
                    {
                      typeButton.map((item, index) => {
                        return <Button
                          onBtnClick={() => handleClick(index)}
                          key={index} type={item.cls} />
                      })
                    }
                  </Play>
        }
        {
          play && <Result
                  text={textResult.current}
            clickPlayAgain={handlePlayAgain}>
            {
              winner && winner.map((item, index) => {
                return <Button
                  key={index}
                  type={item.name}
                  result={item.result}
                  isWin={item.iswin}
                      />
              })
            }
                  </Result>
        }
      </main> 
      <footer>
        <Rules isPlay={play} clickRules={handleRules} rules={ rules }/>
      </footer>
    </div>
  );
}

export default App;
