import styles from './Post.module.scss'
import { formatDistanceToNow } from 'date-fns'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

interface IPostProps {
  post: {
    id: number
    author: {
      avatarUrl: string
      name: string
      role: string
    }
    postContent: {
      type: string
      content: string
      href?: string
    }[]
    hashTags: string[]
    publishedAt: string
  }
}

export function Post({ post }: IPostProps) {
  const date = new Date(post.publishedAt)

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} userName={post.author.name} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={date.toString()} dateTime={date.toISOString()}>
          {formatDistanceToNow(date) /* Published about 1h ago */}
        </time>
      </header>
      <div className={styles.content}>
        {post.postContent.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={`${post.id}-${index}`}>{line.content}</p>
          }

          if (line.type === 'link') {
            return (
              <p key={`${post.id}-${index}`}>
                <a href={line?.href}>{line.content}</a>
              </p>
            )
          }

          return false
        })}

        <p>
          {post.hashTags.map((hashTag) => {
            const replacedHashtag = hashTag.replace(' ', '')

            return (
              <a key={replacedHashtag} href="#">
                {'#' + replacedHashtag}{' '}
              </a>
            )
          })}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave a comment</strong>
        <textarea placeholder="Leave a comment" />

        <footer>
          <button type="submit">Send</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}
