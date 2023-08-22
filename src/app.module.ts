import { Module } from '@nestjs/common';
import { AuthModel } from './auth/auth.model';
import { TopPageModel } from './top-page/top-page.model';
import { ProductModel } from './product/product.model';
import { ReviewModel } from './review/review.model';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: getMongoConfig
    }),
    AuthModel,
     TopPageModel,
      ProductModel,
       ReviewModel
      ],
})
export class AppModule {}
