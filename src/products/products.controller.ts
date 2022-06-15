import { ProductsService } from './products.service';
import { Body, Controller, Post, Get, Param, Patch, Delete } from "@nestjs/common";

@Controller('products')
export class ProductsController {
    constructor (private readonly productservice: ProductsService) {}

    @Post()
    addProduct(@Body('title') prodTitle: string,
               @Body('description') prodDesc: string,
               @Body('title') prodPrice: number, ){
       const generatedId =  this.productservice.insertProduct(prodTitle,prodDesc, prodPrice);

       return { id: generatedId };
    }
    
    @Get()
    getallProduct(){
        return this.productservice.getProduct();
    }

    @Get(':id')
    getProduct(@Param('id') ProdId: string){
        return this.productservice.getSingleProduct(ProdId);
    }

  @Patch(':id')
    updateProduct(@Param('id') ProdId: string, 
                    @Body('title') prodTitle: string,
                    @Body('description') prodDesc: string,
                    @Body('title') prodPrice: number,
        ){

    }

    @Delete(':id')
    removeProduct(@Param('id') ProdId: string,){
        this.productservice.deleteProduct(ProdId);
        return "it was all good"
    }
}