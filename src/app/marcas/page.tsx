import { TITLE_APP } from "@/consts/const";
import styles from "@/app/page.module.css";
import Header from "@/app/components/partials/header";
import Footer from "@/app/components/partials/footer";
import { JSX } from "react/jsx-runtime";


export default function Brands():JSX.Element
{   
    /**
     * Nombre de la aplicación 
     * @var string
     */
    const heading:string = TITLE_APP()

    return (
        <>
        <Header heading={heading} />
        <section className={styles.page}>
        
        <main className={styles.main}>

        </main>
        <Footer />
    </section>
    </>
    );
}