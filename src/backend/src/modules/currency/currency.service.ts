import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Currency } from '@prisma/client';
import { DatabaseConfig } from '../../interfaces/database.config.interface';
import { PrismaService } from '../prisma/prisma.service';

//DTO import
import { CurrenciesValueControlDTO, CurrencyValueControlDTO } from './dto/currency.dto';
//Interface import
import { FormattedCurrency } from './interfaces/currency.interface';

@Injectable()
export class CurrencyService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getAllCurrencies(preferencesParams: CurrenciesValueControlDTO): Promise<FormattedCurrency[]> {
    
    console.log("preferencesParams", preferencesParams)

    let skipFrom = {}
    let takeTake = {}
    let where = {
      id_currency: { contains: 0},
      name: { contains: '' },
      abbr: { contains: '' },
      symbol: { contains: '' }
    };
    let order_by = {}
    let order_direction = {}
    
    if (preferencesParams.from !== 0) { skipFrom = { skip: preferencesParams.from } }
    if (preferencesParams.take !== 0) { takeTake = { take: preferencesParams.take } }
    if (preferencesParams.id !== 0) { where.id_currency = { contains: preferencesParams.id } }
    if (preferencesParams.name !== null) { where.name = { contains: preferencesParams.name.toUpperCase() } }
    if (preferencesParams.abbr !== null) { where.abbr = { contains: preferencesParams.abbr.toUpperCase() } }
    if (preferencesParams.symbol !== null) { where.symbol = { contains: preferencesParams.symbol } }
    if (preferencesParams.order_by !== null) { order_by = { orderBy: preferencesParams.order_by } }
    if (preferencesParams.order_direction !== null) { order_direction = preferencesParams.order_direction }
    
    // console.log("where", where);
    // console.log("order_by", order_by);
    // console.log("order_direction", order_direction);

    const response = await this.prisma.currency.findMany({
      ...skipFrom,
      ...takeTake,
      where: {
        ...(preferencesParams.id !== 0 && { id_currency: preferencesParams.id }),
        ...(preferencesParams.name !== null && { name: { contains: preferencesParams.name.toUpperCase() } }),
        ...(preferencesParams.abbr !== null && { abbr: { contains: preferencesParams.abbr.toUpperCase() } }),
        ...(preferencesParams.symbol !== null && { symbol: { contains: preferencesParams.symbol } }),
      },
      select: {
        id_currency: true,
        name: true,
        abbr: true,
        symbol: true
      },
      orderBy: {
        ...(preferencesParams.order_by !== null && { [preferencesParams.order_by]: preferencesParams.order_direction })
      }
    });
    // console.log("response", response)

    return response;
  }

  async getDetailsCurrency(preferencesParams: CurrencyValueControlDTO): Promise<FormattedCurrency[]> {
    
    let where = {
      id_currency: { contains: 0},
      name: { contains: '' },
      abbr: { contains: '' },
      symbol: { contains: '' }
    };

    // console.log("query in getAllCurrencies", query)

    if (preferencesParams.id !== 0 && preferencesParams.id !== null) { where.id_currency = { contains: preferencesParams.id } }
    if (preferencesParams.name !== null) { where.name = { contains: preferencesParams.name.toUpperCase() } }
    if (preferencesParams.abbr !== null) { where.abbr = { contains: preferencesParams.abbr.toUpperCase() } }
    if (preferencesParams.symbol !== null) { where.symbol = { contains: preferencesParams.symbol } }

    console.log(preferencesParams)

    const response = await this.prisma.currency.findFirst({
      where: {
        ...(preferencesParams.id !== 0 && preferencesParams.id !== null && { id_currency: preferencesParams.id }),
        ...(preferencesParams.name !== null && { name: { contains: preferencesParams.name.toUpperCase() } }),
        ...(preferencesParams.abbr !== null && { abbr: { contains: preferencesParams.abbr.toUpperCase() } }),
        ...(preferencesParams.symbol !== null && { symbol: { contains: preferencesParams.symbol } }),
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