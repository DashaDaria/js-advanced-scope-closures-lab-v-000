function produceDrivingRange(blockRange){
  return function(start, end){
    const startParsed = parseInt(start.replace('th', ''));
    const endParsed = parseInt(end.replace('th', ''));
    let difference = Math.abs(startParsed - endParsed);
    let range = blockRange - difference;
    if(range < 0){
        let mode = Math.abs(range);
        return `${mode} blocks out of range`;
    } else{
      return `within range by ${range}`;
    }
  }
}

function produceTipCalculator(percentage){
  return function(total){
    return total * percentage;
  }
}

function createDriver(){
  let DriverId = 0;
  return class{
    constructor(name){
      this.name = name
      this.id = ++DriverId;
    }
  }
}
