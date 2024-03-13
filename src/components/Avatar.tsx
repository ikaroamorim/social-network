import styles from './Avatar.module.scss'

interface IAvatarProps {
  hasBorder?: boolean
  src: string
  userName: string
}

export function Avatar({ hasBorder = true, src, userName }: IAvatarProps) {
  return (
    <img
      className={
        !hasBorder ? styles.avatar : `${styles.avatar} ${styles.avatarBorder}`
      }
      src={src}
      alt={`${userName} profile picture`}
    />
  )
}
