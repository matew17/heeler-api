import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDocumentDto } from '../dto/document.dto';
import { DocumentsEntity } from '../entity/document.entity';

@Injectable()
export class DocumentService {
    constructor(
        @InjectRepository(DocumentsEntity)
        private readonly documentEntity: Repository<DocumentsEntity>,
    ) { }

    async findAll(): Promise<DocumentsEntity[]> {
        return await this.documentEntity.find({
            relations: [
                'idCompany',
                'idProvider',
                'idCompany.idType',
                'idProvider.idType'
            ],
            order: {
                id: "DESC"
            }
        });
    }

    async findById(id: number): Promise<DocumentsEntity | null> {
        try {
            return await this.documentEntity.findOneOrFail(id, {
                relations: ['idCompany', 'idProvider']
            });
        } catch {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
    }

    async create(document: CreateDocumentDto): Promise<DocumentsEntity> {
        return await this.documentEntity.save(document);
    }

    async update(
        id: number,
        document: CreateDocumentDto,
    ): Promise<DocumentsEntity | null> {
        try {
            await this.documentEntity.findOneOrFail(id);
        } catch (error) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }

        try {
            await this.documentEntity.update(id, document);
        } catch (error) {
            throw new HttpException('Invalid Request', HttpStatus.CONFLICT);
        }

        return this.findById(id);
    }

    async delete(id: number): Promise<any> {
        console.log("Logical Delete");

        try {
            await this.documentEntity.findOneOrFail(id);
        } catch (error) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }

        try {
            await this.documentEntity.update(id, { isCancelled: true });
        } catch (error) {
            throw new HttpException('Invalid Request', HttpStatus.CONFLICT);
        }

        return this.findById(id);
    }
}
