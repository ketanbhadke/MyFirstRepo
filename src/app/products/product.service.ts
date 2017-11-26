import { Injectable } from "@angular/core";
import { IProducts } from "./product";

@Injectable()
export class ProductService {
    getProducts() : IProducts[]{
        return [
            {
                "productId": 1,
                "productName": "cart",
                "productCode": "c1-nbgtex",
                "releaseDate": "21-oct-01",
                "price": 12,
                "description": "Cool",
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
            },
            {
                "productId": 2,
                "productName": "p2",
                "productCode": "c2-fgug",
                "releaseDate": "21-oct-02",
                "price": 21,
                "description": "Cool2",
                "starRating": 3.1,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
            }
        ];
    }
}