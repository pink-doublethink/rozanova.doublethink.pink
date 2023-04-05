import type { Component } from 'solid-js'
import styles from './booksBiography.module.css'

export const BooksBiography: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Книги о Биографии Розановой</div>
        </div>
      </div>
    )
}