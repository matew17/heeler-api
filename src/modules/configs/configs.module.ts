import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DocumentTypeEntity } from './entities/document-type.entity';
import { DocumentTypesController } from './controllers/document-types.controller';
import { DocumentTypesService } from './services/document-types.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([DocumentTypeEntity])
    ],
    controllers: [DocumentTypesController],
    providers: [DocumentTypesService]
})
export class ConfigsModule { }
