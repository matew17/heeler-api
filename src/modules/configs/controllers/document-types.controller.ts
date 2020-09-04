import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';

import { DocumentTypesService } from '../services/document-types.service';
import { DocumentTypeEntity } from '../entities/document-type.entity';
import { DocumentTypeDto } from '../dto/document-type.dto';

@Controller('document-types')
export class DocumentTypesController {
    constructor(private documentTypeService: DocumentTypesService) { }

    @Get()
    async findAll(): Promise<DocumentTypeEntity[]> {
        return this.documentTypeService.findAll();
    }

    @Post()
    async create(@Body() documentType: DocumentTypeDto): Promise<DocumentTypeEntity> {
        return this.documentTypeService.create(documentType);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() documentType: DocumentTypeDto): Promise<DocumentTypeEntity> {
        return this.documentTypeService.update(id, documentType);
    }
}
