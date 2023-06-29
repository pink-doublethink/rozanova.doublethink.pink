import type { Component } from 'solid-js'
import styles from './topAuthors.module.css'

export const TopAuthors: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Чем была известны</div>
        </div>
      </div>
    )
}