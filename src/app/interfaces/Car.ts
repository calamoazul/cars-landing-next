
export type Car = {
    image:string
    alt: string
    width: number,
    height: number
}

export interface CarInterface {

    image: string
    alt:string
    width: number
    height: number
}

export class CarModel implements CarInterface {

    public image:string
    public alt:string
    public width:number
    public height:number

    constructor(img:string, text:string, widthCar:number, heightCar:number){
        this.image = img;
        this.alt = text
        this.width = widthCar
        this.height = heightCar
    }
}

