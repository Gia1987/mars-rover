class Nasa {
  constructor(instructions
    ){
      this.isInstructionsSent = this.sendInstructions(instructions)
  }
  sendInstructions(instructions){
    if(instructions){
      const chunckedCommands = instructions.split('\n')
      this.plateau = new Plateau(chunckedCommands[0])
      this.rover1 = new Rover(chunckedCommands[1],chunckedCommands[2])
      this.rover2 = new Rover(chunckedCommands[3],chunckedCommands[4])
      return true
    }else {
      return false
    }
  }
}

exports.Nasa = Nasa
