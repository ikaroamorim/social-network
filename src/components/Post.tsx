import styles from './Post.module.scss'

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/ikaroamorim.png"
            alt="User Photo"
          />
          <div className={styles.authorInfo}>
            <strong>Ikaro Amorim</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de march às 15:58" dateTime="2024-03-11 15:58:30">
          Published about 1h ago
        </time>
      </header>
      <div className={styles.content}>
        <p>C&apos;mon guys, check this out!! 😊</p>

        <p>I just set another new project in my portfolio.</p>

        <p>
          👉 <a href="https://github.com/ikaroamorim">Ikaro Amorim</a>
        </p>

        <p>
          <a href="#">#newproject</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Leave a comment</strong>
        <textarea placeholder="Leave a comment" />

        <footer>
          <button type="submit">Send</button>
        </footer>
      </form>
    </article>
  )
}
