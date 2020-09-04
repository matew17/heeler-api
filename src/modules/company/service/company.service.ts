import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CompanyEntity } from '../entity/company.entity';
import { CompanyDto } from '../dto/company.dto';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(CompanyEntity)
        private readonly companyEntity: Repository<CompanyEntity>,
    ) { }

    async findAll(): Promise<CompanyEntity[]> {
        return await this.companyEntity.find({
            relations: ['idType'],
            order: {
                fullName: "ASC"
            }
        });
    }

    async findById(id: number): Promise<CompanyEntity | null> {
        try {
            return await this.companyEntity.findOneOrFail(id, {
                relations: ['idType']
            });
        } catch {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
    }

    async create(company: CompanyDto): Promise<CompanyEntity> {
        return await this.companyEntity.save(company);
    }

    async update(
        id: number,
        company: CompanyDto,
    ): Promise<CompanyEntity | null> {
        try {
            await this.companyEntity.findOneOrFail(id);
        } catch (error) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }

        try {
            await this.companyEntity.update(id, company);
        } catch (error) {
            throw new HttpException('Invalid Request', HttpStatus.CONFLICT);
        }

        return this.findById(id);
    }

    async delete(id: number): Promise<any> {
        return await this.companyEntity.delete(id);
    }
}
