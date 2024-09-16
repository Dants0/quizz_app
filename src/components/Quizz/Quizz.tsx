'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import logo from '@/assets/logo.png'
import toast from 'react-hot-toast';

export default function Quizz() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);

  const questions = [
    {
      question: 'Qual é a capital da França?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'Qual é a capital da Alemanha?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
    {
      question: 'Qual é a capital da Espanha?',
      options: ['Madrid', 'Barcelona', 'Valencia', 'Seville'],
      correct: 'Madrid',
    },
  ];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    const correctAnswer = questions[currentQuestion].correct;

    if (answer === correctAnswer) {
      setFeedback('Correto!');
      setScore((prevScore) => prevScore + 1);
      // toast.success("Correto!", {
      //   style: {
      //     backgroundColor: '#008000',
      //     color: 'white',
      //   }
      // });
    } 
    // else {
    //   setFeedback('Incorreto! Tente novamente.');
    //   toast.error("Incorreto! Tente novamente.", {
    //     style: {
    //       backgroundColor: '#D2122E',
    //       color: 'white',
    //     },
    //     iconTheme: {
    //       primary: '#fff',
    //       secondary: '#000',
    //     },
    //   });
    // }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setFeedback(null);
    } else {
      setFeedback(`Quiz concluído! Pontuação: ${score}/${questions.length}`);
    }
  };

  console.log(currentQuestion, questions.length)


  return (
    <div className={styles.containerQuizz}>
      <div className={styles.logo}>
        <img src={logo.src} alt="Logo" />
      </div>
      <div className={styles.wrapper}>
        
        

        {currentQuestion < questions.length ? (
          <div className={styles.wrapper}>
            <div className={styles.question}>
              <h2>{questions[currentQuestion].question}</h2>
            </div>
            <div className={styles.answers}>
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  className={`${styles.answerButton} ${selectedAnswer === option ? styles.selected : ''}`}
                  onClick={() => handleAnswerSelect(option)}
                  // disabled={feedback === 'Correto!' && selectedAnswer !== null} // Desabilita apenas se a resposta for correta                
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedAnswer && (
              <button className={styles.nextButton} onClick={handleNextQuestion}>
                Próxima Pergunta
              </button>
            )}
          </div>
        ) : (
          <div className={styles.result}>
            <h2>Quiz concluído! Pontuação: {score}/{questions.length}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
