'use client'

import { useState } from 'react'
import styles from './styles.module.scss'

export default function Quizz(){

  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  

  return (
    <div className={styles.containerQuizz}>
      
    </div>
  )
}