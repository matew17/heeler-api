import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { CompanyEntity } from 'src/modules/company/entity/company.entity';
import { ProvidersEntity } from 'src/modules/providers/entity/providers.entity';

@Entity()
export class DocumentTypeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => ProvidersEntity, provider => provider.idType)
    providers: ProvidersEntity[];

    @OneToMany(type => CompanyEntity, company => company.idType)
    companies: ProvidersEntity[];
}
