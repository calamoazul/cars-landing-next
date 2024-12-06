import styles from "@/app/styles/partials.module.css"
import NavBar from "./navbar";
type Props = {
    heading: string
}
export default function Header({heading}:Props){

    return(
        <header className={styles.header}>
            <NavBar />
            <span className={styles.title}> {heading} </span>
        </header>
    );
}