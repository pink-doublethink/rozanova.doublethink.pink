import type { Component } from 'solid-js'
import styles from './pictureGallery.module.css'

export const PictureGallery: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Картинная Галерия</div>
        </div>
      </div>
    )
}