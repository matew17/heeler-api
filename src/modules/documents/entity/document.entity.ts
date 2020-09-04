import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { CompanyEntity } from 'src/modules/company/entity/company.entity';
import { ProvidersEntity } from 'src/modules/providers/entity/providers.entity';

@Entity()
export class DocumentsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    date: Date;

    @UpdateDateColumn()
    updateDate: Date;

    @Column()
    products: string;

    @Column({ default: true })
    isCancelled: boolean;

    @Column()
    userUUID: string;

    @Column()
    userEmail: string;

    @ManyToOne(type => CompanyEntity, idCompany => idCompany.documents)
    idCompany: CompanyEntity;

    @ManyToOne(type => ProvidersEntity, idProvider => idProvider.documents)
    idProvider: ProvidersEntity;
}
