import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SongsService {
db:PrismaService;
constructor(db:PrismaService){
  this.db=db;
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
      where:{id:id}
    });
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
