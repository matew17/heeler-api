import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyModule } from './company/company.module';
import { configService } from '../config/config.service';
import { ConfigsModule } from './configs/configs.module';
import { DocumentsModule } from './documents/documents.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      configService.getTypeOrmConfig()
    ),
    CompanyModule,
    ConfigsModule,
    DocumentsModule,
    ProvidersModule
  ]
})
export class AppModule { }
