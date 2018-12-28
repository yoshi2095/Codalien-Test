const moveYoshita = (commands, startingPosition) => {
  //my code
  let endingPosition = startingPosition;
  console.log(endingPosition);
  for(let i=0; i<commands.length; i++){
      if(commands[i]==='L'){
          endingPosition[0] = endingPosition[0]-1;
      }else if(commands[i]==='R'){
          endingPosition[0] = endingPosition[0]+1;
      }else if(commands[i]==='U'){
          endingPosition[1] = endingPosition[1]+1;
      }else if(commands[i]==='D'){
          endingPosition[1] = endingPosition[1]-1;
      }
  }
  return endingPosition;
};

console.log(moveYoshita("LLRDDR", [0,0]));
