import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProvidersController } from './controller/providers.controller';
import { ProvidersEntity } from './entity/providers.entity';
import { ProvidersService } from './services/providers.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProvidersEntity])
    ],
    controllers: [ProvidersController],
    providers: [ProvidersService]
})
export class ProvidersModule { }
