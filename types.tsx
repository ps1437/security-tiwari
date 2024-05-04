export interface Service {
    id: number;
    name: string;
    link?:string;
    description: string;
}

export interface RatingProps{
    rating:number,
    name:string,
    service:string,
    description:string
}

