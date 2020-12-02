import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CodeStates } from './enum/codeStates.enum';
import { Problems } from '../problems/problem.entity';
import { Team } from 'src/teams/team.entity';

@Entity()
export class JudgeSubmissions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /** attach team to each submission for reference */
  @ManyToOne(
    () => Problems,
    (problem) => problem.submissions,
    { eager: true },
  )
  problem: Problems;

  @ManyToOne(
    () => Team,
    (team) => team.judgeSubmissions,
  )
  team: Team;

  @Column({
    type: 'int',
  })
  language: number;

  @Column({
    type: 'enum',
    enum: CodeStates,
    default: CodeStates.IN_QUEUE,
  })
  state: CodeStates;

  @Column({
    type: 'int',
    default: 0,
  })
  points: number;

  @Column()
  judge0ID: string;

  @Column()
  code: string;

  @Column({
    default: false,
  })
  best: boolean;
}
