import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCandidateDto {
  @ApiProperty()
  imageId: string;

  @ApiProperty()
  studentId: string;

  @ApiProperty()
  dignityId: string;

  @ApiProperty()
  listId: string;
}

export class UpdateCandidateDto {
  @ApiPropertyOptional()
  imageId?: string;

  @ApiPropertyOptional()
  studentId?: string;

  @ApiPropertyOptional()
  dignityId?: string;

  @ApiPropertyOptional()
  listId?: string;
}
