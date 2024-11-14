import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  cim:string;
  @IsString()
  @IsNotEmpty()
  szerzo: string;
  @IsInt()
  @IsNotEmpty()
  hossz:number;
  @IsInt()
  @IsNotEmpty()
  ar:number;
}
