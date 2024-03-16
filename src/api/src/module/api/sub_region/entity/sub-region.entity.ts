import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Region } from '../../region/entity/region.entity'; // Asumiendo que existe un entity llamado Region

@Entity({ name: 'Sub_Region' })
export class SubRegion {
  @PrimaryGeneratedColumn()
  id_sub_region: number;

  @Column({ length: 35 })
  name: string;

  @Column()
  id_region: number;

  @ManyToOne(() => Region, { eager: true }) // Ajustado para cargar la relación automáticamente
  @JoinColumn({ name: 'id_region' })
  region: Region;
}