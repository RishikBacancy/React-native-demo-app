import React, { useState } from "react";
import { View, Text} from "react-native";
import GuessGame from "./GuessGame";
import StartGameScreen from "./StartGameScreen";
import GameoverScreen from "./GameoverScreen";

const GameScreen = () =>
{
  const [userNum, setUserNum] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const startGameHandler = selctedNum =>
  {
    setUserNum(selctedNum);
    setGuessRound(0);
  };

  const gameOverHandler = numOfRound =>
  {
    setGuessRound(numOfRound);
  };

  const restartGameHander = () =>
  {
    setGuessRound(0);
    setUserNum(null);
  };

  let content = <GuessGame onStartGame={startGameHandler}/>;

  if(userNum && guessRound <=0){
    content = <StartGameScreen userChoice={userNum} onGameOver={gameOverHandler}/>;
  } else if(guessRound > 0){
    content = <GameoverScreen userRounds={guessRound} userNumber={userNum} restartGame={restartGameHander}></GameoverScreen>
  }

  return(
    
    <View style={{flex:1}}>
      {content}
    </View>
    
  );
}

export default GameScreen;