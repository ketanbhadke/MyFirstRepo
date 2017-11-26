import { Component, OnInit } from '@angular/core';
import { IProducts } from './product';
import { ProductService } from './product.service';


@Component({
    selector:'app-prod',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle:string = 'Product List';
    imageWidth: number = 50;
    imagemargin:number = 2;
    showImage:boolean = false;
    
    _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
    }

    filteredProducts: IProducts[];

    products:IProducts[] = [];

    toggleImage():void{
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }

    constructor(private _productService : ProductService) {

    }
    performFilter(filterBy: string): IProducts[]{
        filterBy = filterBy.toLocaleLowerCase()
        return this.products.filter((product:IProducts) =>
               product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }
}