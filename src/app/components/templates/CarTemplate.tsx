import Image from "next/image";
import { JSX } from "react/jsx-runtime";
import styles from "@/app/styles/partials.module.css";
import { type Car } from "@/app/interfaces/CarInterface";



export default function CarTemplate({image, alt, width, height}:Car):JSX.Element
{
    return(
        <article className={styles.article}>
            <picture>
            <Image src={image} alt={alt} width={width} height={height}/>
            </picture>
            <span>{alt}</span>
        </article>
    );
}