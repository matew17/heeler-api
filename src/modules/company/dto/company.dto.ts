import { ApiProperty } from '@nestjs/swagger';

import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

export class CompanyDto {
    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly fullName: string;

    @ApiProperty()
    readonly idType: ForeignKeyMetadata;

    @ApiProperty()
    readonly idNumber: string;

    @ApiProperty()
    readonly address: string;

    @ApiProperty()
    readonly phone: string;

    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly responsability: string;

    @ApiProperty()
    readonly dianResolution: string;

    @ApiProperty()
    readonly logoURL: string;
}
