import Image from "next/image";
import styles from "./page.module.css";
import { TITLE_APP } from "@/consts/const";
import Header from "./components/partials/header";
import Footer from "./components/partials/footer";
import CarTemplate from "./components/templates/CarTemplate";
import { type Car } from "./interfaces/CarInterface";
import useDefaultCars from "@/data/cars";
export default function Home() {
   /**
     * Titulo de la aplicación
     * @var string
     */
   const heading:string = TITLE_APP()

   /**
    * Usamos un servicio para obtener los datos de los coches de forma estática.
    * Más tarde se aplicará petición a base de datos
    */
   const {props3008, props408, props5008} = useDefaultCars()
   
   const car3008:Car = props3008();
   const car5008:Car = props5008();
   const car408:Car = props408();

   return (
       <>
       <Header heading={heading} />
       <section className={styles.page} >
           <main className={styles.main} >
               <CarTemplate image={car3008.image} alt={car3008.alt} width={car3008.width} height={car3008.height} />
               <CarTemplate image={car5008.image } alt={car5008.alt} width={car5008.width} height={car5008.height} />
               <CarTemplate image={car408.image} alt={car408.alt} width={car408.width} height={car408.height} />
           </main>
       </section>
       <Footer />
       </>
   
  );
}
