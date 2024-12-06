
/**
 * Tipo para registrar los valores de las fichas de los coches
 * @version 1.0.0
 */
export type Car = {
    image:string
    alt: string
    width: number,
    height: number
}

/**
 * Interfaz para implementar la clase CarModel
 * @version 1.0.0
 */
export interface CarInterface<Car> {

    image: string
    alt:string
    width: number
    height: number
}

/**
 * Clase CarModel que integra funciones para trabajar con la información de los coches
 * @version 1.0.0
 */
export class CarModel implements CarInterface<Car> {

    public image:string
    public alt:string
    public width:number
    public height:number

    constructor({image, alt, width, height}:Car){
        this.image = image;
        this.alt = alt
        this.width = width
        this.height = height
    }

    getCar = ():Car => 
    {
        return {
            image: this.image,
            alt: this.alt,
            width: this.width,
            height: this.height

        }
    }
}

