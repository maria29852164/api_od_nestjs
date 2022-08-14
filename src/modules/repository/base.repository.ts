import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseEntity, Entity, Repository } from 'typeorm';

export class BaseRepository {
  constructor(
    @InjectRepository(BaseEntity) _repository: Repository<BaseEntity>,
  ) {}
}
