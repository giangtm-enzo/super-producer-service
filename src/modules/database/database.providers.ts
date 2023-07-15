import { DATABASE_CONNECTION } from '@config/constants';
import * as mongoose from 'mongoose';

export const mongoProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@${process.env.MONGODB_PROJECT}.mongodb.net/${process.env.MONGODB_DBNAME}`,
      ),
  },
];
