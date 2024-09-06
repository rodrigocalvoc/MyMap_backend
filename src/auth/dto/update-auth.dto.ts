import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional } from 'class-validator';
import { Country } from '../entities/country.entity';

export class UpdateAuthDto extends PartialType(CreateUserDto) {
    @IsOptional()
    countries?: Country[];
  
}
