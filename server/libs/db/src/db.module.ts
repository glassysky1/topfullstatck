import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import {TypegooseModule} from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Course } from './models/course.model';
import { Episode } from './models/episode.model';

const models = TypegooseModule.forFeature([
  User,
  Course,
  Episode
])
//模型全局引用
@Global()
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/topfullstack',{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false
    }),
    //导入模型
    models
  ],
  providers: [DbService],
  //导出模型
  exports: [DbService,models],
})
export class DbModule {}
