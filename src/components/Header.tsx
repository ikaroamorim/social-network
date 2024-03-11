import styles from './Header.module.scss'
import logo from '../assets/logo.png'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Site Logo" />
      <strong>Social Media</strong>
    </div>
  )
}
