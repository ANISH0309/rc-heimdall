import { EntityRepository, Repository } from 'typeorm';
import { GetQuestionDto } from './dto/filter-question.dto';
import { SeederObject } from './interface/seeder.interface';
import { QuestionEntity } from './question.entity';

@EntityRepository(QuestionEntity)
export class QuestionRepository extends Repository<QuestionEntity> {
  constructor(private questionStorage: Array<SeederObject>) {
    super();
    this.questionStorage = [];
  }

  /**
   * Method to clear list of stored Question IDs
   * @async
   * @returns boolean true if all questions from persistence later were cleared
   */
  clearStorage(): boolean {
    this.questionStorage = [];
    return true;
  }

  /**
   * Method to seed question into persistence layer
   * async
   * @param questionList array of strings containing ids of questions downloaded by controller
   * @returns boolean true if seeding is successful
   */
  seedQuestionList(questionList: Array<SeederObject>): boolean {
    this.questionStorage = [...questionList];
    return true;
  }

  /**
   * method to check if given question id exists in storage
   * @param filterDto {id} object containing the ID of the question to check if it exists
   * @returns boolean true if given question with id exists
   */
  checkIfQuestionExist(filterDto: GetQuestionDto): SeederObject {
    this.questionStorage.forEach(question => {
      if (question.id === filterDto.id) {
        return question;
      }
    });
    return undefined;
  }
}
