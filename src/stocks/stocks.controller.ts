import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) { }

  @Post()
  create(@Body() stock: CreateStockDto) {
    return this.stocksService.create(stock);
  }

  @Get()
  findAll() {
    return this.stocksService.findAll();
  }
}
