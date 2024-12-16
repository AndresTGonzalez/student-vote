import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDignityDto {
  @ApiProperty()
  name: string;
}

export class UpdateDignityDto {
  @ApiPropertyOptional()
  name?: string;
}
