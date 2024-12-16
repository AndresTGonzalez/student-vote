import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  identificationCard: string;

  @ApiProperty()
  names: string;

  @ApiProperty()
  lastNames: string;

  @ApiProperty({ default: false })
  canVote?: boolean;

  @ApiProperty()
  courseId: string;
}

export class UpdateStudentDto {
  @ApiPropertyOptional()
  identificationCard?: string;

  @ApiPropertyOptional()
  names?: string;

  @ApiPropertyOptional()
  lastNames?: string;

  @ApiPropertyOptional()
  canVote?: boolean;

  @ApiPropertyOptional()
  courseId?: string;
}
