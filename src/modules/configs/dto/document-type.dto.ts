import { ApiProperty } from '@nestjs/swagger';

export class DocumentTypeDto {
    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly name: string;
}
