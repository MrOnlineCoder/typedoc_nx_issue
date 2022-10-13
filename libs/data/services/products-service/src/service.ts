import { IProduct } from "./entities";


/**
 * Main class to interact with products
 *
 * @export
 * @class ProductsService
 */
export class ProductsService {


    /**
     * Returns all products available at the moment
     *
     * @return {*}  {IProduct[]}
     * @memberof ProductsService
     */
    public getProducts(): IProduct[]  {
        return [
            {
                name: 'Apple iPhone',
                price: 1200,
                sku: 'APL_1'
            }
        ]
    }
}