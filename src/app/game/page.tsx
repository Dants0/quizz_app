import Quizz from "@/components/Quizz/Quizz";

import styles from './styles.module.scss'


export default function Game(){
  return (
    <div className={styles.containerGame}>
      <Quizz/>
    </div>
  )
}