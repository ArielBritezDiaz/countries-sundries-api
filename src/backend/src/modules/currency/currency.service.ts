import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Currency } from '@prisma/client';
import { DatabaseConfig } from '../../interfaces/database.config.interface';
import { PrismaService } from '../prisma/prisma.service';

//DTO import
import { CurrenciesValueControlDTO } from './dto/currency.dto';

@Injectable()
export class CurrencyService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getAllCurrencies(preferencesParams: CurrenciesValueControlDTO): Promise<Currency[]> {
    
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
    console.log("order_by", order_by);
    console.log("order_direction", order_direction);

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

  async getDetailsCurrency(query: any): Promise<Currency[]> {
    let defineWhere = {}

    // console.log("query in getAllCurrencies", query)

    if (query.id_currency !== undefined && query.id_currency !== null && !isNaN(parseInt(query.id_currency))) {
      defineWhere = { id_currency: parseInt(query.id_currency) };
    }
    if (query.name !== undefined && query.name !== null) {
      defineWhere = { name: { contains: query.name.toUpperCase() } };
    }
    if (query.abbr !== undefined && query.abbr !== null) {
      defineWhere = { abbr: query.abbr.toUpperCase() };
    }
    if (query.symbol !== undefined && query.symbol !== null) {
      defineWhere = { symbol: query.symbol };
    }

    // console.log(defineWhere)

    const response = await this.prisma.currency.findFirst({
      where: defineWhere,
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