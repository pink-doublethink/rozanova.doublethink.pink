import type { Component } from 'solid-js'
import styles from './culturalHeritage.module.css'

export const CulturalHeritage: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Культурное наследие</div>
        </div>
      </div>
    )
}