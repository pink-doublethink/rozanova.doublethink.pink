import type { Component } from 'solid-js'
import styles from './whatWasFamous.module.css'

export const WhatWasFamous: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
            <div class={styles.block__title}>Чем была известны</div>
        </div>
      </div>
    )
}