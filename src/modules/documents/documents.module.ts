import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DocumentController } from './controller/document.controller';
import { DocumentsEntity } from './entity/document.entity';
import { DocumentService } from './service/document.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DocumentsEntity])
  ],
  controllers: [DocumentController],
  providers: [DocumentService]
})
export class DocumentsModule { }
