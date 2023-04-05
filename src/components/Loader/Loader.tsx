import type { Component } from 'solid-js'
import styles from './loader.module.css'

export const Loader: Component = () => {
    return (
      <div class={styles.loader}>
        <span class={styles.loader__body}></span>
      </div>
    )
};