import type { Component } from 'solid-js'
import styles from './сreatorWeek.module.css'

export const CreatorWeek: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Creator Week</div>
        </div>
      </div>
    )
}