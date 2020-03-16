import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Episode } from './episode.model'


@modelOptions({
  schemaOptions: {
    //时间戳
    timestamps: true
  }
})
export class Course {
  @ApiProperty({ description: '课程名称' })
  @prop()
  name: string


  @ApiProperty({ description: '封面图' })
  @prop()
  cover: string


  @arrayProp({itemsRef:'Episode'})
  episodes: Ref<Episode>[]
}