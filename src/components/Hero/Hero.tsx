import type { Component } from 'solid-js'
import styles from './hero.module.css'

export const Hero: Component = () => {
    return (
      <div class={styles.hero}>
        <div class={styles.hero__container}>
            <div class={styles.hero__collect}>Hero</div>
            <div class={styles.hero__currency}>
              <div class={styles.hero__curItem}>
                <div class={styles.hero__curImg}>
                  <img src="" alt="" />
                </div>
                <div class={styles.hero__curTitle}></div>
              </div>
              <div class={styles.hero__curItem}>
                <div class={styles.hero__curImg}>
                  <img src="" alt="" />
                </div>
                <div class={styles.hero__curTitle}></div>
              </div>
              <div class={styles.hero__curItem}>
                <div class={styles.hero__curImg}>
                  <img src="" alt="" />
                </div>
                <div class={styles.hero__curTitle}></div>
              </div>
              <div class={styles.hero__curItem}>
                <div class={styles.hero__curImg}>
                  <img src="" alt="" />
                </div>
                <div class={styles.hero__curTitle}></div>
              </div>
            </div>
        </div>
      </div>
    )
}