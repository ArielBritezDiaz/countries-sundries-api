import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'Currency'})
export class Currency {
  @PrimaryGeneratedColumn()
  id_currency: number;

  @Column({ length: 20 })
  abbr: string;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 30 })
  symbol: string;
}