import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StockDocument = Stock & Document;

@Schema()
export class Stock {
    @Prop({ required: true })
    symbol: string;

    @Prop()
    name: string;

    @Prop()
    sector: string;

    @Prop()
    price: number;

    @Prop({ default: Date.now })
    lastUpdated: Date;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
