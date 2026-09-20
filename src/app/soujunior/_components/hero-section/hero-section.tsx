import Image from "next/image";
import Link from "next/link";

import styles from "./hero-section.module.css";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.arrow}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section id="topo" className={styles.hero}>
      <div className={styles.wrap}>
        <div className={styles.heroGrid}>
          <div>
            <h1>
              Uma oportunidade pode mudar uma{" "}
              <span className={styles.underlined}>carreira</span>{" "}
              <span className={styles.highlight}>inteira.</span>
            </h1>
            <p className={styles.lead}>
              A SouJunior aproxima o aprendizado da realidade profissional.
              Apoiamos quem está começando na tecnologia com{" "}
              <strong>projetos reais, mentoria e comunidade</strong> — para que a
              primeira oportunidade deixe de ser uma barreira.
            </p>
            <div className={styles.heroActions}>
              <Link
                href="#apoie"
                className={`${styles.button} ${styles.primary} ${styles.large}`}
              >
                Apoiar a SouJunior <ArrowIcon />
              </Link>
              <Link
                href="#sobre"
                className={`${styles.button} ${styles.outline} ${styles.large}`}
              >
                Conhecer a SouJunior
              </Link>
            </div>
          </div>
          <div className={styles.heroSide}>
            <div className={styles.heroPhoto}>
              <Image
                src="/juniormascote.png"
                alt="Mascote SouJunior"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 35vw"
              />
            </div>
            <div className={styles.heroSticker}>
              São Paulo, BR
              <small>Fundado 2022</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
