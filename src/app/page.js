import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  // add js here

  return (
    <>
    <head>
      <title>Taylor Swift Song Sorter</title>
      </head>
      <body className= {styles.body}>
        <h1 className= {styles.h1}>Taylor Swift Song Sorter</h1>
        <div className= {styles.songContainer} id="songContainer">
          <h2 className= {styles.song1} id="song1"></h2>
          <h2 className= {styles.song2} id="song2"></h2>
        </div>
        <li className= {styles.li} id="rankingsList"></li>
      </body>
    </>
  )
}
