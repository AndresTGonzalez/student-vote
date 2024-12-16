import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  level: string;

  @ApiProperty()
  parallel: string;
}

export class UpdateCourseDto {
  @ApiPropertyOptional()
  level?: string;

  @ApiPropertyOptional()
  parallel?: string;
}
