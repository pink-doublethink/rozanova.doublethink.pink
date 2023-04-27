import type { Component } from 'solid-js'
import styles from './contact.module.css'

export const Contact: Component = () => {
    return (
      <div class={styles.block}>
        <section class={styles.block__container}>
          <div class={styles.block__content}>
            <h2 class={styles.block__h2}></h2>
            <p class={styles.block__p}></p>
          </div>
          <div class={styles.block__innerBox}>
            <div class={styles.block__contactInfo}>
              <div class={styles.block__box}>
                <div class={styles.block__icon}></div>
                <div class={styles.block__text}></div>
              </div>
              <div class={styles.block__box}>
                <div class={styles.block__icon}></div>
                <div class={styles.block__text}></div>
              </div>
              <div class={styles.block__box}>
                <div class={styles.block__icon}></div>
                <div class={styles.block__text}></div>
              </div>
              <h3 class={styles.block__h3}></h3>
              <ul class={styles.block__icons}>
                <li class={styles.block__li}><a href="" class={styles.block__a}></a></li>
                <li class={styles.block__li}><a href="" class={styles.block__a}></a></li>
                <li class={styles.block__li}><a href="" class={styles.block__a}></a></li>
                <li class={styles.block__li}><a href="" class={styles.block__a}></a></li>
                <li class={styles.block__li}><a href="" class={styles.block__a}></a></li>
              </ul>
            </div>
            <div class={styles.block__contactForm}>
              <form action="" class={styles.block__form}>
                <h2 class={styles.block__h2}></h2>
                <div class={styles.block__inputBox}>
                  <input type="text" required class={styles.block__inp} />
                  <span class={styles.block__span}>Full Name</span>
                </div>
                <div class={styles.block__inputBox}>
                  <input type="email" required class={styles.block__inp} />
                  <span class={styles.block__span}>Email</span>
                </div>
                <div class={styles.block__inputBox}>
                  <textarea required class={styles.block__txtArea}></textarea>
                  <span class={styles.block__span}>Type your Message...</span>
                </div>
                <div class={styles.block__inputBox}>
                  <input type="submit" value="Send" required class={styles.block__submit} />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
}