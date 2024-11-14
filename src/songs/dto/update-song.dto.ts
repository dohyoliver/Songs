import { PartialType } from '@nestjs/mapped-types';
import { CreateSongDto } from './create-song.dto';
import { IsInt } from 'class-validator';

export class UpdateSongDto extends PartialType(CreateSongDto) {
  @IsInt()
  price?: number;
}
