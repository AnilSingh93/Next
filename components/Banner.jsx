import Image from "next/Image";
import Styles from "../styles/Banner.module.css";
import Link from "next/link";

const Banner = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.wrapper}>
                <div className={Styles.img_container}>
                    <Image src="/img/download.png" alt="" layout="fill" />
                <div className={Styles.banner_text}>
                       <h1>Soothe muscles with one of our star ingredients</h1>
                       <p>Shop our selection of arnica products, developed to help athletes promote recovery and soothe painful muscles.</p>
                </div>

                <div className={Styles.banner_btn}>
                    <Link href="/about">Shop arnica</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;