import { Link } from 'solid-app-router'
import type { Component } from 'solid-js'
import styles from './header.module.css'

export const Header: Component = () => {
    return (
      <header class={styles.header}>
        <div class={styles.header__container}>
            <Link href='/'>
                <div class={styles.header__logo}>
                    <img src="" alt="" class={styles.header__img} />
                </div>
            </Link>

            <nav class={styles.header__nav}>
                <ul class={styles.header__ul}>
                    <Link href='bio'><li class={styles.header__li}>Творческий путь</li></Link>
                    <Link href='legacy'><li class={styles.header__li}>Наследие</li></Link>
                    <Link href='bio'><li class={styles.header__li}>Картины</li></Link>
                    <Link href='contact'><li class={styles.header__li}>Контакты</li></Link>
                </ul>
            </nav>
        </div>
      </header>
    )
}