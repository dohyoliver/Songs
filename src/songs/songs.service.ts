import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SongsService {

  constructor(public db:PrismaService){
  
}
  create(createSongDto: CreateSongDto) {
    return this.db.song.create({
    data: createSongDto
    });
  }

  findAll() {
    return this.db.song.findMany();
  }

  findOne(id: number) {
    return this.db.song.findUnique({
      where:{ id } 
    });
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return this.db.song.update({
      where: { id },
      data: updateSongDto,
    });;
  }

  remove(id: number) {
    return this.db.song.delete({
      where: { id },
    });
  }
}
