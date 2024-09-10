import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    // MongooseModule.forRoot( process.env.MONGO_URI ),
    MongooseModule.forRoot( 'mongodb://localhost:27017/mean-db' ),

    AuthModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}

