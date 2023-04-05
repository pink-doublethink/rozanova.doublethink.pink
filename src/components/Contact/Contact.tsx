import type { Component } from 'solid-js'
import styles from './contact.module.css'

export const Contact: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Страница контактов</div>
        </div>
      </div>
    )
}