import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';

import { DocumentService } from '../service/document.service';
import { DocumentsEntity } from '../entity/document.entity';
import { CreateDocumentDto } from '../dto/document.dto';


@Controller('documents')
export class DocumentController {
    constructor(private documentService: DocumentService) { }

    @Get()
    async findAll(): Promise<DocumentsEntity[]> {
        return this.documentService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<DocumentsEntity | null> {
        return this.documentService.findById(id);
    }

    @Post()
    async create(@Body() document: CreateDocumentDto): Promise<DocumentsEntity> {
        return this.documentService.create(document);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        return this.documentService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() document: CreateDocumentDto): Promise<DocumentsEntity> {
        return this.documentService.update(id, document);
    }
}
