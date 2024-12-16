import { ApiProperty } from '@nestjs/swagger';

export class CreateConfigurationDto {
  @ApiProperty()
  isFirstTime: boolean;

  @ApiProperty()
  period: string;

  @ApiProperty()
  votationEnabled: boolean;

  @ApiProperty()
  votationStart: Date;

  @ApiProperty()
  votationEnd: Date;
}
