import type { Component } from 'solid-js'
import styles from './latestBlog.module.css'

export const LatestBlog: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Latest Blog</div>
        </div>
      </div>
    )
}