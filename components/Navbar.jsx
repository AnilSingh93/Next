import styles from "../styles/Navbar.module.css"
import Image from 'next/image'
import Link from "next/link";


const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_inner}>
                    <div className={styles.header_left}>
                        <Link href="/">
                        <Image src="/img/Header.svg" alt="" width="320" height="100" layout="fill"/>
                        </Link>
                    </div>
                    <div className={styles.header_center}>
                        <nav className={styles.menu}>
                            <ul className={styles.center_menu}>
                                <li>Shop</li>
                                <li>Why Hylands</li>
                                <li>Community</li>
                            </ul>

                        </nav>
                    </div>
                    <div className={styles.header_right}>
                        <div className={styles.right_menu}>
                        <div className={styles.menu_country}>
                        
                             <Image src="/img/flag.png" alt="" layout="fill"/>   
                            <span className={styles.us}>US</span>
                        </div>
                            <div className={styles.user}>
                            <Image src="/img/user.svg" alt="" layout="fill"/>   
                            </div>
                            <div className={styles.search}>
                            <Image src="/img/Search.svg" alt="" layout="fill"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
