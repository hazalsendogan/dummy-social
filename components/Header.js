import Link from 'next/link'
import React from 'react'
import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <header>
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/" className={styles.navLink}>Home</Link>
                </li>
                <li>
                    <Link href="/users" className={styles.navLink}>Users</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
