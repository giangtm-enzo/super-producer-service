import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  dob: Date;

  @Prop()
  address: string;

  @Prop()
  mobileNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
