'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [language, setLanguage] = useState('en')

  const translations = {
    en: {
      title: 'Classup - The Learning App',
      subtitle: 'Create meetings, collaborate, and share knowledge',
      createMeeting: 'Create Meeting',
      joinMeeting: 'Join Meeting',
      features: 'Features',
      multiLanguage: 'Multi-Language Support',
      collaboration: 'Real-time Collaboration',
      sharing: 'Easy Sharing',
      deployment: 'Deploy to Free Domain',
      jokeGenerator: 'Joke Generator',
    },
    vi: {
      title: 'Classup - Ứng Dụng Học Tập',
      subtitle: 'Tạo cuộc họp, cộng tác và chia sẻ kiến thức',
      createMeeting: 'Tạo Cuộc Họp',
      joinMeeting: 'Tham Gia Cuộc Họp',
      features: 'Tính Năng',
      multiLanguage: 'Hỗ Trợ Đa Ngôn Ngữ',
      collaboration: 'Cộng Tác Thời Gian Thực',
      sharing: 'Chia Sẻ Dễ Dàng',
      deployment: 'Triển Khai Miễn Phí',
      jokeGenerator: 'Trò Đùa Ngẫu Nhiên',
    },
    es: {
      title: 'Classup - La Aplicación de Aprendizaje',
      subtitle: 'Crea reuniones, colabora y comparte conocimiento',
      createMeeting: 'Crear Reunión',
      joinMeeting: 'Unirse a Reunión',
      features: 'Características',
      multiLanguage: 'Soporte Multilingüe',
      collaboration: 'Colaboración en Tiempo Real',
      sharing: 'Compartir Fácil',
      deployment: 'Implementar Dominio Gratuito',
      jokeGenerator: 'Generador de Bromas',
    },
  }

  const t = translations[language as keyof typeof translations]

  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>🌟 Classup</div>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/jokes" className={styles.navLink}>
            Jokes
          </Link>
        </div>
        <div className={styles.languageSelector}>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="vi">Tiếng Việt</option>
            <option value="es">Español</option>
          </select>
        </div>
      </nav>

      <section className={styles.hero}>
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>{t.createMeeting}</button>
          <button className={styles.secondaryBtn}>{t.joinMeeting}</button>
        </div>
      </section>

      <section className={styles.features}>
        <h2>{t.features}</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌍</div>
            <h3>{t.multiLanguage}</h3>
            <p>Support for multiple languages to connect learners worldwide</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👥</div>
            <h3>{t.collaboration}</h3>
            <p>Collaborate with others in real-time on projects</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📤</div>
            <h3>{t.sharing}</h3>
            <p>Share content easily with your learning community</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚀</div>
            <h3>{t.deployment}</h3>
            <p>Deploy your app instantly to a free domain</p>
          </div>
        </div>
      </section>

      <section className={styles.tools}>
        <h2>🛠️ Tools & Features</h2>
        <div className={styles.toolGrid}>
          <Link href="/jokes" className={styles.toolCard}>
            <div className={styles.toolIcon}>😂</div>
            <h3>Joke Generator</h3>
            <p>Get random jokes using an external API</p>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2026 Classup Learning App. All rights reserved.</p>
      </footer>
    </main>
  )
}
