import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '../../../interface/database.config.interface';

//DTO import
import { CurrenciesValueControlDTO, CurrencyValueControlDTO } from './dto/currency.dto';
//Interface import
import { FormattedCurrency } from './interfaces/currency.interface';
import { Repository, Like } from 'typeorm';
import { Currency } from './entity/currency.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(Currency)
    private readonly currencyRepository: Repository<Currency>,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getAllCurrencies(query: CurrenciesValueControlDTO): Promise<FormattedCurrency[]> {
    
    console.log("query", query)

    let order = {}
    if(query.order_by && query.order_direction) {
      order = {[query.order_by]: query.order_direction}
    } else if (query.order_by && !query.order_direction) {
      order = {[query.order_by]: 'asc'}
    } else if (!query.order_by && query.order_direction) {
      order = {id_currency: query.order_direction}
    }

    const response = await this.currencyRepository.find({
      ...(query.from && { skip: query.from } ),
      ...(query.take && query.take <= 30 ? { take: query.take } : { take: 30 } ),
      where: {
        ...(query.id && { id_currency: query.id }),
        ...(query.name && { name: query.name }),
        ...(query.abbr && { abbr: Like(`%${query.abbr}%`) }),
        ...(query.symbol && { symbol: Like(`%${query.symbol}%`) }),
      },
      select: {
        id_currency: true,
        name: true,
        abbr: true,
        symbol: true
      },
      order
    });
    // console.log("response", response)

    return response;
  }

  async getDetailsCurrency(query: CurrencyValueControlDTO): Promise<FormattedCurrency[]> {
    // console.log("query in getAllCurrencies", query)

    console.log(query)

    const response = await this.currencyRepository.findOne({
      where: {
        ...(query.id && { id_currency: query.id }),
        ...(query.name && { name: query.name }),
        ...(query.abbr && { abbr: Like(`%${query.abbr}%`) }),
        ...(query.symbol && { symbol: Like(`%${query.symbol}%`) }),
      },
      select: {
        id_currency: true,
        name: true,
        abbr: true,
        symbol: true
      }
    });

    return response !== null ? [ response ] : [];
  }
}