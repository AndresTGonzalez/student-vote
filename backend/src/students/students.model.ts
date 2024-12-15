import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  identificationCard: string;

  @ApiProperty()
  names: string;

  @ApiProperty()
  lastNames: string;

  @ApiProperty()
  courseId: string;
}

export class UpdateStudentDto {
  @ApiProperty()
  identificationCard: string;

  @ApiProperty()
  names: string;

  @ApiProperty()
  lastNames: string;

  @ApiProperty()
  courseId: string;
}
