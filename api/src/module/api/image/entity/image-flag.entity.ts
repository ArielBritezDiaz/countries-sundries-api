import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'Flag'})
export class Flag {
  @PrimaryGeneratedColumn()
  id_flag: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 10 })
  type: string;

  @Column({ length: 255 })
  url: string;
}