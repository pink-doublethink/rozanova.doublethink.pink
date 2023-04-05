import type { Component } from 'solid-js'
import styles from './hero.module.css'
import logo from '../../logo.svg'

export const Hero: Component = () => {
    return (
      <div class={styles.hero}>
        <div class={styles.hero__container}>
            <div class={styles.hero__title}>Приветик!</div>
            <div class={styles.hero__logo}>
                <img src={logo} alt="" />
            </div>
        </div>
      </div>
    )
}