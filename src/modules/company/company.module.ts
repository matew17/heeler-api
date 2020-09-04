import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyController } from './controller/company.controller';
import { CompanyEntity } from './entity/company.entity';
import { CompanyService } from './service/company.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyEntity])
  ],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule { }
