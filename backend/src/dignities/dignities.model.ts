import { ApiProperty } from '@nestjs/swagger';

export class CreateDignityDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}

export class UpdateDignityDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}
