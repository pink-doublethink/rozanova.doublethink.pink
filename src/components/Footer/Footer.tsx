import type { Component } from 'solid-js'
import styles from './footer.module.css'

export const Footer: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Footer</div>
        </div>
      </div>
    )
}