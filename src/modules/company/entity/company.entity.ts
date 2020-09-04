import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

import { DocumentsEntity } from 'src/modules/documents/entity/document.entity';
import { DocumentTypeEntity } from 'src/modules/configs/entities/document-type.entity';

@Entity()
export class CompanyEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    idNumber: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    responsability: string;

    @Column()
    dianResolution: string;

    @Column()
    logoURL: string;

    @ManyToOne(type => DocumentTypeEntity, idType => idType.companies)
    idType: DocumentTypeEntity;

    @OneToMany(type => DocumentsEntity, company => company.idCompany)
    documents: DocumentsEntity[];
}
