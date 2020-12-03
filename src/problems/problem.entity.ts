import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { JudgeSubmissions } from 'src/judge/judge.entity';

/**
 * Problems Entity represents data related to participants and its relationships
 * with other problems.
 *
 * Read-up about typeORM entities to get more insights about decorators used.
 *
 * @category Problems
 */
@Entity()
export class Problems extends BaseEntity {
  /** randomly generated uuid to avoid numeric questions ids that are predictable */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Relationship to categorize all submissions made for a particular problem for insights.
   * The members of this property are of [[JudgeSubmissions]] type.
   */
  @OneToMany(
    () => JudgeSubmissions,
    (submission) => submission.problem,
  )
  submissions: JudgeSubmissions[];

  /** human read-able string to identify a problem */
  @Column()
  name: string;

  /** maximum points that can be assigned to the problem */
  @Column({
    default: 100,
  })
  maxPoints: number;

  /**
   * URL to download input file, this file is not downloaded but read directly.
   * This data is streamed into STDIN when participant makes a submission.
   */
  @Column()
  inputFileURL: string;

  /**
   * URL to download output file, this file is not downloaded but read directly.
   * The output of participant's code is checked against this file.
   */
  @Column()
  outputFileURL: string;

  /**
   * URL to fetch instructions. All problems have a short description to explain the
   * type of inputs they take, this is displayed directly in participant's portal.
   */
  @Column()
  instructionsFileURL: string;

  /**
   * URL to download binary file(`.exe`) for windows users. This is shared directly
   * with users.
   */
  @Column()
  windowsFileURL: string;

  /**
   * URL to download object files (for unix systems). This file is compiled
   * and then can be used on any unix system.
   */
  @Column()
  objectFileURL: string;

  /**
   * This is the content of input file in plain text format.
   */
  @Column()
  inputText: string;

  /**
   * This is the content of output file in plain text format.
   */
  @Column()
  outputText: string;

  /**
   * This is the content of instructions file in plain text format.
   */

  @Column()
  instructionsText: string;
}
