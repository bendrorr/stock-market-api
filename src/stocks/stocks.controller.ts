import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.stocksService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateStockDto) {
    return this.stocksService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stocksService.remove(id);
  }
}
