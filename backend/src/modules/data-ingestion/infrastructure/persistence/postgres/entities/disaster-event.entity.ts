import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RegionEntity } from './region.entity';

enum SeverityLevel {
  LOW = 'LOW',
  MODERATE = 'MODERATE',
  SEVERE = 'SEVERE',
  CRITICAL = 'CRITICAL',
}

@Entity({
  name: 'disaster_event',
})
export class DisasterEventEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  type: string;

  @Column({ type: 'text', nullable: true })
  externalId: string | null;

  @Column({ type: 'text' })
  source: string;

  @Column({ type: 'enum', enum: SeverityLevel })
  severity: boolean;

  @Column({ type: 'float', nullable: true })
  magnitude: number | null;

  @Column({ type: 'timestamptz' })
  occuredAt: Date;

  @OneToOne(() => RegionEntity)
  @JoinColumn({
    foreignKeyConstraintName: 'disaster_region_fkey',
  })
  region: RegionEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
