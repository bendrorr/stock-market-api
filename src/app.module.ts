import { Module } from '@nestjs/common';
import { StocksModule } from './stocks/stocks.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/stock-db'),
    StocksModule,
  ],
})
export class AppModule { }