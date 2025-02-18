import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'Coat_Of_Arm'})
export class CoatOfArm {
  @PrimaryGeneratedColumn()
  id_coat_of_arm: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 10 })
  type: string;

  @Column({ length: 255 })
  url: string;
}