import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DocumentTypeDto } from '../dto/document-type.dto';
import { DocumentTypeEntity } from '../entities/document-type.entity';

@Injectable()
export class DocumentTypesService {
    constructor(
        @InjectRepository(DocumentTypeEntity)
        private readonly documentTypeEntity: Repository<DocumentTypeEntity>,
    ) { }

    async findAll(): Promise<DocumentTypeEntity[]> {
        return await this.documentTypeEntity.find({
            order: {
                name: "ASC"
            }
        });
    }

    async create(provider: DocumentTypeDto): Promise<DocumentTypeEntity> {
        return await this.documentTypeEntity.save(provider);
    }

    async update(
        id: number,
        provider: DocumentTypeDto,
    ): Promise<DocumentTypeEntity | null> {
        try {
            await this.documentTypeEntity.findOneOrFail(id);
        } catch (error) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }

        await this.documentTypeEntity.update(id, provider);

        return await this.documentTypeEntity.findOne(id);
    }
}
