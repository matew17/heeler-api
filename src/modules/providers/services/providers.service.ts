import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProviderDto } from '../dto/providers.dto';
import { ProvidersEntity } from '../entity/providers.entity';

@Injectable()
export class ProvidersService {
    constructor(
        @InjectRepository(ProvidersEntity)
        private readonly providersEntity: Repository<ProvidersEntity>,
    ) { }

    async findAll(): Promise<ProvidersEntity[]> {
        return await this.providersEntity.find({
            relations: ['idType'],
            order: {
                name: "ASC"
            }
        });
    }

    async findById(id: number): Promise<ProvidersEntity | null> {
        try {
            return await this.providersEntity.findOneOrFail(id, {
                relations: ['idType']
            });
        } catch {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
    }

    async create(provider: CreateProviderDto): Promise<ProvidersEntity> {
        return await this.providersEntity.save(provider);
    }

    async update(
        id: number,
        provider: CreateProviderDto,
    ): Promise<ProvidersEntity | null> {
        try {
            await this.providersEntity.findOneOrFail(id);
        } catch (error) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }

        try {
            await this.providersEntity.update(id, provider);
        } catch (error) {
            throw new HttpException('Invalid Request', HttpStatus.CONFLICT);
        }

        return this.findById(id);
    }

    async delete(id: number): Promise<any> {
        return await this.providersEntity.delete(id);
    }
}
