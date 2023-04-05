import type { Component } from 'solid-js'
import styles from './placesMemory.module.css'

export const PlacesMemory: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Места памяти</div>
        </div>
      </div>
    )
}