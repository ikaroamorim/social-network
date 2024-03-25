import styles from './Post.module.scss'
import { formatDistanceToNow } from 'date-fns'

import { Comment, IComment } from './Comment'
import { Avatar } from './Avatar'
import React, { useState } from 'react'

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

// const comments = [1, 2, 3]

export function Post({ post }: IPostProps) {
  const [comments, setComments] = useState<IComment[]>([])
  const [newCommentText, setNewCommentText] = useState<string>('')
  const date = new Date(post.publishedAt)

  function handleNewCommentChange() {
    setNewCommentText(event?.target.value)
  }

  function handleCreateNewComment() {
    event?.preventDefault()

    setComments([
      ...comments,
      { id: comments.length + 1, postId: 1, text: newCommentText },
    ])

    setNewCommentText('')
  }

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

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Leave a comment</strong>
        <textarea
          name="comment"
          placeholder="Leave a comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
        />

        <footer>
          <button type="submit">Send</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />
        })}
      </div>
    </article>
  )
}
