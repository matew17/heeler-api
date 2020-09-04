import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';

import { ProvidersService } from '../services/providers.service';
import { ProvidersEntity } from '../entity/providers.entity';
import { CreateProviderDto } from '../dto/providers.dto';

@Controller('providers')
export class ProvidersController {

    constructor(private providersService: ProvidersService) { }

    @Get()
    async findAll(): Promise<ProvidersEntity[]> {
        return this.providersService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<ProvidersEntity | null> {
        return this.providersService.findById(id);
    }

    @Post()
    async create(@Body() provider: CreateProviderDto): Promise<ProvidersEntity> {
        return this.providersService.create(provider);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        return this.providersService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() provider: CreateProviderDto): Promise<ProvidersEntity> {
        return this.providersService.update(id, provider);
    }
}
