import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStockDto } from './dto/create-stock.dto';
import { Stock, StockDocument } from './schemas/stock.schema';
import { StockMapper } from './stock.mapper';


@Injectable()
export class StocksService {
  constructor(@InjectModel(Stock.name) private stockModel: Model<StockDocument>) { }

  async create(stock: CreateStockDto): Promise<CreateStockDto> {
    const stockEntity = StockMapper.toEntity(stock);
    const createdStock = new this.stockModel(stockEntity);
    const savedStock = await createdStock.save();
    return StockMapper.toDto(savedStock);
  }

  async findById(id: string): Promise<CreateStockDto> {
    const stock = await this.stockModel.findById(id).exec();
    if (!stock) throw new NotFoundException('Stock not found');
    return StockMapper.toDto(stock);
  }

  async update(id: string, updateStockDto: CreateStockDto): Promise<CreateStockDto> {
    const stock = await this.stockModel.findByIdAndUpdate(id, updateStockDto, { new: true }).exec();
    if (!stock) throw new NotFoundException('Stock not found');
    return StockMapper.toDto(stock);
  }

  async findAll(): Promise<CreateStockDto[]> {
    const stocks = await this.stockModel.find().exec();
    return stocks.map(StockMapper.toDto);
  }

  async remove(id: string): Promise<void> {
    const result = await this.stockModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Stock not found');
  }
}
