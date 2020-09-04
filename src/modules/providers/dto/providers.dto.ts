import { ApiProperty } from '@nestjs/swagger';

import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

export class CreateProviderDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly lastName: string;

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
}