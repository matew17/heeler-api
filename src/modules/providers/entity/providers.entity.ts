import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

import { DocumentTypeEntity } from 'src/modules/configs/entities/document-type.entity';
import { DocumentsEntity } from 'src/modules/documents/entity/document.entity';

@Entity()
export class ProvidersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    idNumber: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @ManyToOne(type => DocumentTypeEntity, idType => idType.providers)
    idType: DocumentTypeEntity;

    @OneToMany(type => DocumentsEntity, document => document.idProvider)
    documents: DocumentsEntity[];
}
