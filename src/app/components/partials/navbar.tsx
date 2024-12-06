'use client'

import Image from "next/image";
import styles from "@/app/styles/partials.module.css";
import globals from "../../page.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import useRouterService from "@/app/services/RouterService";
export default function NavBar() {
   
    const {returnHome} = useRouterService()
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu} >
                <li><Image className={globals.logo}
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                    onClick={returnHome}                   
                    /></li>
                <Link href="/alquiler">Alquiler</Link>
                <Link href="/marcas">Marcas</Link>
            </ul>
        </nav>
    )
}