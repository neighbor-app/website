import {Shop} from './shop';

export interface Offer {
    id: number,
    date: string,
    time: string,
    shop: Shop
}