'use client'
import Image from "next/image";
import styles from '@/app/page.module.css';
import Header from "../components/partials/header";
import Footer from "../components/partials/footer";
import { TITLE_APP } from "@/consts/const";
import { JSX } from "react/jsx-runtime";
import CarTemplate from "../components/templates/CarTemplate";
import { type Car } from "../interfaces/Car";
export default function Renting():JSX.Element
{

    /**
     * Titulo de la aplicación
     * @var string
     */
    const heading:string = TITLE_APP()

    /**
     * En esta página se declaran las props de forma manual para el componente CarTemplate.
     * Las props están definidas según el type Car
     */

    /**
     * Modelo Peugeot 3008
     * @var Car
     */
    const props3008:Car = {
        image:'https://www.peugeot.es/content/dam/peugeot/master/b2c/our-range/showroom/3008/2023-new-e-3008-/3008-white-label/e-3008-white-label-/3008_NOIR_PERLA_NERA.jpg',
        alt: 'Peugeot 3008',
        width: 400,
        height: 400
    }

    /**
     * Modelo 5008
     * @var Car
     */
    const props5008:Car = {
        image: 'https://www.peugeot.es/content/dam/peugeot/master/b2c/our-range/showroom/5008/2024-04-white-label/5008-hybrid/PEUGEOT_5008_MHEV_Personnalisation_1600x900.jpg?imwidth=768',
        alt: 'Peugeot 5008',
        width: 400,
        height: 400
    }

    /**
     * Modelo 408
     * @var Car
     */
    const props408:Car = {
        image: 'https://www.peugeot.es/content/dam/peugeot/master/b2c/our-range/showroom/new-408/offers/408_TOP_OF_THE_LINE.png',
        alt: 'Peugeot 408',
        width: 400,
        height: 400
    }

    return (
        <>
        <Header heading={heading} />
        <section className={styles.page} >
            <main className={styles.main} >
                <CarTemplate image={props3008.image} alt={props3008.alt} width={props3008.width} height={props3008.height} />
                <CarTemplate image={props5008.image } alt={props5008.alt} width={props5008.width} height={props5008.height} />
                <CarTemplate image={props408.image} alt={props408.alt} width={props408.width} height={props408.height} />
            </main>
        </section>
        <Footer />
        </>
    );
}