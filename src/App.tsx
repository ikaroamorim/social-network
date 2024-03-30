import './global.css'
import styles from './App.module.scss'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ikaroamorim.png',
      name: 'Íkaro Amorim',
      role: 'Developer',
    },
    postContent: [
      { id: 1, type: 'paragraph', content: `C'mon guys, check this out!! 😊` },
      {
        id: 2,
        type: 'paragraph',
        content: 'I just set another new project in my portfolio',
      },
      {
        id: 3,
        type: 'link',
        content: '👉 Ikaro Amorim',
        href: 'Ikaro Amorim',
      },
    ],
    hashTags: ['newproject', 'nlw', 'rocketseat'],
    publishedAt: '2024-03-13T15:42:48.014Z',
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @RocketSeat',
    },
    postContent: [
      { id: 1, type: 'paragraph', content: `C'mon guys, check this out!! 😊` },
      {
        id: 2,
        type: 'paragraph',
        content: 'I just set another new project in my portfolio',
      },
      {
        id: 3,
        type: 'link',
        content: '👉 Ikaro Amorim',
        href: 'Ikaro Amorim',
      },
    ],
    hashTags: ['newproject', 'nlw', 'rocketseat'],
    publishedAt: '2024-03-13T15:42:48.014Z',
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @RocketSeat',
    },
    postContent: [
      { id: 1, type: 'paragraph', content: `C'mon guys, check this out!! 😊` },
      {
        id: 2,
        type: 'paragraph',
        content: 'I just set another new project in my portfolio',
      },
      {
        id: 3,
        type: 'link',
        content: '👉 Ikaro Amorim',
        href: 'Ikaro Amorim',
      },
    ],
    hashTags: ['newproject', 'nlw', 'rocketseat'],
    publishedAt: '2024-03-13T15:42:48.014Z',
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
