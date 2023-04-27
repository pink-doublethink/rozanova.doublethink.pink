import type { Component } from 'solid-js'
import styles from './becomingArtist.module.css'

export const BecomingArtist: Component = () => {
    return (
      <div class={styles.block}>
        <div class={styles.block__container}>
          <div class={styles.block__title}>Становление Художницы</div>
          <div class={styles.block__content}>
            <div class={styles.block__grid}>
              <div class={styles.block__gridItem}>
                <div class={styles.block__imgItem}>
                  <img src="image1.jpg" alt="image1" class={styles.block__img} />
                </div>
                <div class={styles.block__gridText}>
                  <p>Начала свой путь в искусстве с раннего возраста. Была вдохновлена своим отцом, который тоже занимался живописью.</p>
                </div>
              </div>
              <div class={styles.block__gridItem}>
                <div class={styles.block__imgItem}>
                  <img src="image1.jpg" alt="image1" class={styles.block__img} />
                </div>
                <div class={styles.block__gridText}>
                  <p>Начала свой путь в искусстве с раннего возраста. Была вдохновлена своим отцом, который тоже занимался живописью.</p>
                </div>
              </div>
              <div class={styles.block__gridItem}>
                <div class={styles.block__imgItem}>
                  <img src="image1.jpg" alt="image1" class={styles.block__img} />
                </div>
                <div class={styles.block__gridText}>
                  <p>Начала свой путь в искусстве с раннего возраста. Была вдохновлена своим отцом, который тоже занимался живописью.</p>
                </div>
              </div>
              <div class={styles.block__gridItem}>
                <div class={styles.block__imgItem}>
                  <img src="image1.jpg" alt="image1" class={styles.block__img} />
                </div>
                <div class={styles.block__gridText}>
                  <p>Начала свой путь в искусстве с раннего возраста. Была вдохновлена своим отцом, который тоже занимался живописью.</p>
                </div>
              </div>
            </div>
            <div class={styles.block__desrip}>
              <div class={styles.block__desripItem}>
                <div class={styles.block__desripText}>
                  <p>Начала свой путь в искусстве с раннего возраста. Была вдохновлена своим отцом, который тоже занимался живописью.</p>
                </div>
              </div>
              <div class={styles.block__desripItem}>
                <div class={styles.block__desripText}>
                  <p>Начала свой путь в искусстве с раннего возраста. Была вдохновлена своим отцом, который тоже занимался живописью.</p>
                </div>
              </div>
              <div class={styles.block__desripItem}>
                <div class={styles.block__desripText}>
                  <p>Начала свой путь в искусстве с раннего возраста. Была вдохновлена своим отцом, который тоже занимался живописью.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}