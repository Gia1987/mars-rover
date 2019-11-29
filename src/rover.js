class Rover {
  constructor(data, commands){
    this.location = this.processData(data)
    this.finalPosition = commands !== undefined ? this.move(commands) : ''
    this.direction = ['N','W','S','E']
  }

  processData(data){
    return data.split(' ').map(el => parseInt(el) ? parseInt(el) : el )
  }
  move(commands){
    const x = this.location[0]
    const y = this.location[1]
    const direction = this.location[2]
    const arrayOfCommands = commandas.split(',')
'LMLMRMLMM'
    arrayOfCommands.map(command, ()=>{
      switch (command) {
        case 'L'

    })

  }
}
exports.Rover = Rover
