'use client'

import { useState } from 'react'
import styles from './jokes.module.css'

interface Joke {
  type: string
  setup?: string
  delivery?: string
  joke?: string
  error?: boolean
}

export default function JokeGenerator() {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(false)
  const [jokesHistory, setJokesHistory] = useState<Joke[]>([])

  const fetchJoke = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/Any?format=json'
      )
      const data: Joke = await response.json()
      setJoke(data)
      setJokesHistory([data, ...jokesHistory.slice(0, 4)])
    } catch (error) {
      console.error('Error fetching joke:', error)
      setJoke({
        type: 'error',
        joke: 'Failed to fetch joke. Please try again!',
        error: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>😂 Random Joke Generator</h1>
          <p>Get a random laugh every time!</p>
        </div>

        {joke && (
          <div
            className={`${styles.jokeCard} ${
              joke.error ? styles.error : ''
            }`}
          >
            {joke.type === 'twopart' ? (
              <>
                <div className={styles.setup}>
                  <strong>Setup:</strong> {joke.setup}
                </div>
                <div className={styles.punchline}>
                  <strong>Punchline:</strong> {joke.delivery}
                </div>
              </>
            ) : (
              <div className={styles.joke}>{joke.joke}</div>
            )}
          </div>
        )}

        <button
          className={styles.fetchBtn}
          onClick={fetchJoke}
          disabled={loading}
        >
          {loading ? '⏳ Loading...' : '🎭 Get a Joke'}
        </button>

        {jokesHistory.length > 0 && (
          <div className={styles.history}>
            <h3>📜 Recent Jokes</h3>
            <div className={styles.historyList}>
              {jokesHistory.map((h, index) => (
                <div key={index} className={styles.historyItem}>
                  {h.type === 'twopart'
                    ? `${h.setup?.substring(0, 50)}...`
                    : h.joke?.substring(0, 50)}
                  ...
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
