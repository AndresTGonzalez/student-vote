import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  level: string;

  @ApiProperty()
  parallel: string;
}

export class UpdateCourseDto {
  @ApiProperty()
  level: string;

  @ApiProperty()
  parallel: string;
}
