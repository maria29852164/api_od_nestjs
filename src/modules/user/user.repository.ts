import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from '../repository/base.repository';

export class UserRepository extends BaseRepository {
  constructor(@InjectRepository(User) _repository: Repository<User>) {
    super(_repository);
  }
}
