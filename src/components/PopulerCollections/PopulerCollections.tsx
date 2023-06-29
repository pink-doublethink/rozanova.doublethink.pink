import type { Component } from 'solid-js'
import styles from './populerCollections.module.css'

export const PopulerCollections: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Почему ее до сих помнят</div>
        </div>
      </div>
    )
}