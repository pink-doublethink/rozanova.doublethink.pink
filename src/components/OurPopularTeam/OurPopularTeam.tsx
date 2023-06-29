import type { Component } from 'solid-js'
import styles from './ourPopularTeam.module.css'

export const OurPopularTeam: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Our Popular Team</div>
        </div>
      </div>
    )
}