import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';

import { CompanyService } from '../service/company.service';
import { CompanyEntity } from '../entity/company.entity';
import { CompanyDto } from '../dto/company.dto';

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService) { }

    @Get()
    async findAll(): Promise<CompanyEntity[]> {
        return this.companyService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<CompanyEntity | null> {
        return this.companyService.findById(id);
    }

    @Post()
    async create(@Body() company: CompanyDto): Promise<CompanyEntity> {
        return this.companyService.create(company);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        return this.companyService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() company: CompanyDto): Promise<CompanyEntity> {
        return this.companyService.update(id, company);
    }
}
