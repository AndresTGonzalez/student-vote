import { ApiProperty } from '@nestjs/swagger';

export class CreateCandidateDto {
  @ApiProperty()
  photoUrl: string;

  @ApiProperty()
  studentId: string;

  @ApiProperty()
  dignityId: string;

  @ApiProperty()
  listId: string;
}

export class UpdateCandidateDto {
  @ApiProperty()
  photoUrl: string;

  @ApiProperty()
  studentId: string;

  @ApiProperty()
  dignityId: string;

  @ApiProperty()
  listId: string;
}
