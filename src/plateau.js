class Plateau {
  constructor(data){
    this.gird = this.processData(data)
  }
  processData(data){
    if(data && data.length > 0 ){
      const plateauLength =  data.split(' ').map(el => parseInt(el))
      return this.createGrid(plateauLength[0],plateauLength[1])
    }
  }
  createGrid(x,y) {
    var grid = [];
    for(let i=0; i<= y; i++){
      var row = [];
        for(let j=0; j<= x; j++){
          row.push('')
        }
        grid.push(row)
    }
     return grid
  }
}

exports.Plateau = Plateau
