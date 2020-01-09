import { prop ,modelOptions} from '@typegoose/typegoose'

@modelOptions({
  schemaOptions:{
    timestamps:true
  }
})
export class Episode {
  //每个课时
  @prop()
  name: string

  @prop()
  file: string
}