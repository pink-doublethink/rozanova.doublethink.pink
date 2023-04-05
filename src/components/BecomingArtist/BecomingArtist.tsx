import type { Component } from 'solid-js'
import styles from './becomingArtist.module.css'

export const BecomingArtist: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Становление Художницы</div>
        </div>
      </div>
    )
}