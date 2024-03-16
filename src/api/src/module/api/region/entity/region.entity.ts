import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'Region'})
export class Region {
  @PrimaryGeneratedColumn()
  id_region: number;

  @Column({ length: 30 })
  name: string;
}