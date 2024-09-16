import Image from "next/image";
import styles from "./styles.module.scss";

import logo from '@/assets/logo.png'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.logo}>
        <img src={logo.src} alt="Logo" />
      </div>
      <Link href="/game" className={styles.buttonInit}>
        Começar o Quizz
      </Link>
    </div>
  );
}
