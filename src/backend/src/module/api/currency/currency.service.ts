import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '../../../interface/database.config.interface';
import { PrismaService } from '../../prisma/prisma.service';

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

    const response = await this.prisma.currency.findMany({
      ...(preferencesParams.from && { skip: preferencesParams.from } ),
      ...(preferencesParams.take && { take: preferencesParams.take } ),
      where: {
        ...(preferencesParams.id && { id_currency: preferencesParams.id }),
        ...(preferencesParams.name && { name: { contains: preferencesParams.name.toUpperCase() } }),
        ...(preferencesParams.abbr && { abbr: { contains: preferencesParams.abbr.toUpperCase() } }),
        ...(preferencesParams.symbol && { symbol: { contains: preferencesParams.symbol } }),
      },
      select: {
        id_currency: true,
        name: true,
        abbr: true,
        symbol: true
      },
      orderBy: {
        ...(preferencesParams.order_by && { [preferencesParams.order_by]: preferencesParams.order_direction })
      }
    });
    // console.log("response", response)

    return response;
  }

  async getDetailsCurrency(preferencesParams: CurrencyValueControlDTO): Promise<FormattedCurrency[]> {
    // console.log("query in getAllCurrencies", query)

    console.log(preferencesParams)

    const response = await this.prisma.currency.findFirst({
      where: {
        ...(preferencesParams.id && preferencesParams.id !== null && { id_currency: preferencesParams.id }),
        ...(preferencesParams.name && { name: { contains: preferencesParams.name.toUpperCase() } }),
        ...(preferencesParams.abbr && { abbr: { contains: preferencesParams.abbr.toUpperCase() } }),
        ...(preferencesParams.symbol && { symbol: { contains: preferencesParams.symbol } }),
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