import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateListDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  imageId: string;
}

export class UpdateListDto {
  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  imageId?: string;
}
