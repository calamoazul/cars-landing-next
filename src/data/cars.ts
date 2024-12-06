import { type Car } from "@/app/interfaces/CarInterface";

export default function useDefaultCars() {

    /**
     * Método para obtener las propiedades del modelo 3008
     * @version 1.0.0
     * @returns Car
     */
    const props3008 = (): Car => {
        return {
            image: 'https://www.peugeot.es/content/dam/peugeot/master/b2c/our-range/showroom/3008/2023-new-e-3008-/3008-white-label/e-3008-white-label-/3008_NOIR_PERLA_NERA.jpg',
            alt: 'Peugeot 3008',
            width: 400,
            height: 400
        }
    }

    /**
     * Método para obtener los valores del modelo 5008
     * @version 1.0.0
     * @returns Car
     */
    const props5008 = (): Car => {
        return {
            image: 'https://www.peugeot.es/content/dam/peugeot/master/b2c/our-range/showroom/5008/2024-04-white-label/5008-hybrid/PEUGEOT_5008_MHEV_Personnalisation_1600x900.jpg?imwidth=768',
            alt: 'Peugeot 5008',
            width: 400,
            height: 400
        }
    }

    /**
     * Método para obtener los valores del modelo 408
     * @version 1.0.0
     * @returns Car
     */
    const props408 = (): Car => {
        return {
            image: 'https://www.peugeot.es/content/dam/peugeot/master/b2c/our-range/showroom/new-408/offers/408_TOP_OF_THE_LINE.png',
            alt: 'Peugeot 408',
            width: 400,
            height: 400
        }
    }

    return {
        props3008,
        props5008,
        props408
    }
}