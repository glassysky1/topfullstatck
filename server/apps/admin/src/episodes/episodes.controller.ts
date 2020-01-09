import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger'
import { InjectModel } from 'nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose';
import { Episode } from '@libs/db/models/episode.model';

@Crud({
  model:Episode
})

@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
  //引用模型
  constructor(@InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>

  ) { }
}
