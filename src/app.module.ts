import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    // MongooseModule.forRoot( process.env.MONGO_URI ),
    MongooseModule.forRoot( 'mongodb+srv://root:mongodb@cluster0.ggzfr.mongodb.net/' ),

    AuthModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}

