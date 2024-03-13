import { Avatar } from './Avatar'
import styles from './Sidebar.module.scss'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1682686581776-b6ebee7c150e?q=70&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background image selected by user"
      />

      <div className={styles.profile}>
        <Avatar
          src="https://github.com/ikaroamorim.png"
          userName="Ikaro Amorim"
        />
        <strong>Ikaro Amorim</strong>
        <span>Developer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={20} />
          Edit Profile
        </a>
      </footer>
    </aside>
  )
}
