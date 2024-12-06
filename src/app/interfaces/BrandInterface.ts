/**
 * Base genérica para cualquier marca de coche de la aplicación.
 * @var Brand
 * @version 1.0.0
 */
export type Brand =
{
    name:string;
    country:string;
    cars: number
}


/**
 * Interfaz para desarrollar distintos tipos de clases de marcas
 * @version 1.0.0
 */
export interface BrandInterface<Brand> {
    name:string;
    country:string
    cars:number
}


/**
 * Clase genérica para las marcas de coches
 * @version 1.0.0
 */
export class BrandCar implements BrandInterface<Brand> {

    public name:string;
    public country:string;
    public cars:number;

    constructor({name, country,cars}:Brand){
        this.name = name;
        this.country = country;
        this.cars = cars;
    }
}