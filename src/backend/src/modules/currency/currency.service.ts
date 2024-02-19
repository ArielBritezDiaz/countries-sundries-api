import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Currency } from '@prisma/client';
import { DatabaseConfig } from '../../interfaces/database.config.interface';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CurrencyService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getAllCurrencies(preferencefrom: any): Promise<Currency[]> {
    
    console.log("preferencefrom", preferencefrom)

    let skipFrom = {}
    let takeTake = {}
    if(preferencefrom.from !== 0) {
      skipFrom = { skip: preferencefrom.from }
    }
    if(preferencefrom.to !== 0) {
      takeTake = { take: preferencefrom.take }
    }

    const response = await this.prisma.currency.findMany({
      ...skipFrom,
      ...takeTake,
      select: {
        id_currency: true,
        name: true,
        abbr: true,
        symbol: true
      }
    });

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