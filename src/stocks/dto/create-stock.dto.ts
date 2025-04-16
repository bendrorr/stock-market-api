export class CreateStockDto {
    readonly symbol: string;
    readonly name: string;
    readonly sector?: string;
    readonly price?: number;
    readonly lastUpdated?: Date;
}