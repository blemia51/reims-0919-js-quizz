import React from "react"
import './ButtonQcm.css'


class ButtonBool extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          win: false,
          lost: false,
          winT: false,
          lostT: false,
          winF: false,
          lostF: false
      }
      this.checkTrue = this.checkTrue.bind(this)
      this.checkFalse = this.checkFalse.bind(this)
      this.nextQuestion = this.nextQuestion.bind(this)
  } 
   
  
  checkTrue() {
    (this.props.correct_answer === 'True')?
    this.setState({win: true, winT: true}):
    this.setState({lost: true, lostT: true});
    (this.props.correct_answer === 'True') && this.props.incrementScore()
      
  }

   
  checkFalse() {
    (this.props.incorrect_answer[0] === 'True')?
    this.setState({win: true, winF: true}): 
    this.setState({lost: true, lostF: true});    
    (this.props.incorrect_answer[0] === 'True') && this.props.incrementScore()
  }

  
  nextQuestion() {
    this.setState({win: false, lost :false, winT:false, lostT:false, winF:false, lostF:false});
    this.props.getQuestions();
    this.props.incrementQuestionNumber()  
  }
  
  render() {
    
  return (
  <div className='cardContent'>
    <div>
      <button 
        onClick={this.checkTrue} className='qcmButton'
         id={this.state.winT?'winButtonT':'qcmButtonT'&& this.state.lostT? 'lostButtonT':'qcmButtonT'}>True
      </button>

      <button
        onClick={this.checkFalse} className='qcmButton'
         id={this.state.winF ? 'winButtonF':'qcmButtonF' && this.state.lostF ? 'lostButtonF':'qcmButtonF'}>False
      </button>
    </div>

    <div className={this.state.win?'imageWin':'noImage'}>
      <img className='winLogo' src={"https://i.ibb.co/Pzgh2rx/good-answer-smiley.png"} alt="Win" ></img>         
    </div> 
    <div className={this.state.lost?'imageLost':'noImage'}> 
      <img className='lostLogo' src={"https://i.ibb.co/3BkyqKX/bad-answer-smiley.png"} alt="Lost" ></img>    
    </div> 
    <div>
      <button onClick={this.nextQuestion}
      className={this.state.lost||this.state.win?'qcmButton':'noImage'}>Next question</button>
    </div>
  </div>
  )
}
}

export default ButtonBool;
