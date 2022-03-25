import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../state/action-creators'


export function Quiz(props) {
  const {quiz, selectAnswer, postAnswer, selectedAnswer} = props
  

  const handleSelect = id => {
    selectAnswer(id)
  }

  const handleSubmit = () => {
    postAnswer(quiz.quiz_id, selectedAnswer)
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}

export default connect(mapStateToProps, actionCreators)(Quiz)