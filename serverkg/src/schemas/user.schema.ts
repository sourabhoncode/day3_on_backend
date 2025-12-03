import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phoneNumber: number;

  @Prop({ required: true })
  password: string;

  @Prop()
  profileImage?: string;

  @Prop()
  location?: string;

  @Prop({ default: true })
  terms: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
