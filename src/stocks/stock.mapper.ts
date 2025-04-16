import { CreateStockDto } from "./dto/create-stock.dto";
import { Stock } from "./schemas/stock.schema";

export class StockMapper {

    static toDto(entity: Stock): CreateStockDto {
        return {
            symbol: entity.symbol,
            name: entity.name,
            sector: entity.sector,
            price: entity.price,
            lastUpdated: entity.lastUpdated

        }
    }

    static toEntity(dto: CreateStockDto): Partial<Stock> {
        return {
            symbol: dto.symbol,
            name: dto.name,
            sector: dto.sector,
            price: dto.price,
            lastUpdated: dto.lastUpdated

        }
    }
}