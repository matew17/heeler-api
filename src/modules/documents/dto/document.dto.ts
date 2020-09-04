import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentDto {
    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly date: Date;

    @ApiProperty()
    readonly updateDate: Date;

    @ApiProperty()
    readonly products: string;

    @ApiProperty()
    readonly isCancelled: boolean;

    @ApiProperty()
    readonly userUUID: string;

    @ApiProperty()
    readonly userEmail: string;

    @ApiProperty()
    readonly idCompany: any;

    @ApiProperty()
    readonly idProvider: any;
}
