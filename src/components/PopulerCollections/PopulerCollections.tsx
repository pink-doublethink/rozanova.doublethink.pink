import type { Component } from 'solid-js'
import styles from './populerCollections.module.css'

export const PopulerCollections: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Populer Collections</div>
        </div>
      </div>
    )
}