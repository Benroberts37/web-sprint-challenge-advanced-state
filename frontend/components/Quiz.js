import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../state/action-creators'


export function Quiz(props) {
  const {quiz, selectAnswer, postAnswer, selectedAnswer, fetchQuiz} = props


  useEffect(() => {
    !quiz && fetchQuiz()
  }, [])

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
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`${selectedAnswer === quiz.answers[0].answer_id ? 'answer selected' : 'answer'}`}>
                {quiz.answers[0].text}
                <button onClick={() => handleSelect(quiz.answers[0].answer_id)}>
                  {`${selectedAnswer === quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}`}
                </button>
              </div>

              <div className={`${selectedAnswer === quiz.answers[1].answer_id ? 'answer selected' : 'answer'}`}>
                {quiz.answers[1].text}
                <button onClick={() => handleSelect(quiz.answers[1].answer_id)}>
                  {`${selectedAnswer === quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}`}
                </button>
              </div>
            </div>


            <button onClick={handleSubmit} id="submitAnswerBtn" disabled={!selectedAnswer}>Submit answer</button>
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