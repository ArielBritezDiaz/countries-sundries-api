import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Region } from '../../region/entity/region.entity';
import { SubRegion } from '../../sub_region/entity/sub-region.entity';
import { Flag } from '../../flag/entity/flag.entity';
import { CoatOfArm } from '../../coat-of-arm/entity/coat-of-arm.entity';
import { Currency } from '../../currency/entity/currency.entity';

@Entity({ name: 'Country' })
export class Country {
  @PrimaryGeneratedColumn()
  id_country: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  official_name: string;

  @Column({ length: 5 })
  abbr: string;

  @Column({ length: 20 })
  internet_tld: string;

  @Column({ length: 100, nullable: true })
  motto: string;

  @Column({ length: 100, nullable: true })
  anthem: string;

  @Column({ length: 100 })
  capital: string;

  @Column({ length: 50 })
  official_language: string;

  @Column()
  population: number;

  @Column({ length: 5, nullable: true })
  iso_3166_1_alpha_2: string;

  @Column({ length: 5, nullable: true })
  iso_3166_1_alpha_3: string;

  @Column({ length: 10, nullable: true })
  calling_code: string;

  @Column({ length: 20, nullable: true })
  timezone: string;

  @ManyToOne(() => CoatOfArm, { eager: true }) 
  @JoinColumn({ name: 'id_coat_of_arm' })
  coat_of_arm: CoatOfArm;

  @ManyToOne(() => Flag, { eager: true }) 
  @JoinColumn({ name: 'id_flag' })
  flag: Flag;

  @ManyToOne(() => Currency, { eager: true }) 
  @JoinColumn({ name: 'id_currency' })
  currency: Currency;

  @ManyToOne(() => Region, { eager: true }) 
  @JoinColumn({ name: 'id_region' })
  region: Region;

  @ManyToOne(() => SubRegion, { eager: true }) 
  @JoinColumn({ name: 'id_sub_region' })
  sub_region: SubRegion;
}
