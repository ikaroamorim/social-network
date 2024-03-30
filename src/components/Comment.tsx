import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Coment.module.scss'
import { Avatar } from './Avatar'

export interface IComment {
  id: number
  postId: number
  text: string
}

export interface ICommentProps {
  comment: IComment
  onDeleteComment: (commentId: number) => void
}

export function Comment(props: ICommentProps) {
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/ikaroamorim.png"
        userName="Ikaro Amorim"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ikaro Amorim</strong>
              <time title="11 de march às 15:58" dateTime="2024-03-11 15:58:30">
                About 1h ago
              </time>
            </div>
            <button
              onClick={() => props.onDeleteComment(props.comment.id)}
              title="Delete Comment"
            >
              <Trash size={24} />
            </button>
          </header>
          <p> {props.comment.text} </p>
        </div>
        <footer>
          <button title="Like">
            <ThumbsUp />
            Like
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
