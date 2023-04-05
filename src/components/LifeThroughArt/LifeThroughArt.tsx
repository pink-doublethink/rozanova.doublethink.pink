import type { Component } from 'solid-js'
import styles from './lifeThroughArt.module.css'

export const LifeThroughArt: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Жизнь через искуство</div>
        </div>
      </div>
    )
}