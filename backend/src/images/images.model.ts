import { ApiProperty } from '@nestjs/swagger';

export class CreateImageDto {
  @ApiProperty({
    description: 'URL of the uploaded image',
    example: 'uploads/12345-abcde.jpg',
  })
  url: string;
}
