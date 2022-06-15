/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Product } from './product.model';
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class ProductsService{
    Products: Product[] = [];

    insertProduct(title: String, desc: string, price: number){
        const newProduct = new Product(new Date().toString(), title, desc, price);
        this.Products.push(newProduct);
    }

    getProduct() {
        return [...this.Products];
    }

    getSingleProduct(ProductId: string){
        const product = this.findProductById(ProductId)[0]
        return {...product};
    }

    updateProduct(productId: string, title: string, desc: string, price: number){

        const [product, index] = this.findProductById(productId);
        
        //const product = this.findProductById(productId)[0]
        //const index = this.findProductById(productId)[1]
    }
    
    deleteProduct(prodId: string){
        const index = this.findProductById(prodId)[1]
        this.Products.splice(index, 1)
    }

    private findProductById(id: string): [Product, number]{
        const productIndex = this.Products.findIndex(prod => prod.id === id);
        const product = this.Products[productIndex];
        if(!product) {
            throw new NotFoundException('could not find product');
        }

        return [product, productIndex];
    }
}