import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'User'})
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 110, unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'datetime', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}