import { CreateUserDto } from './create-user.dto';
import { Country } from '../entities/country.entity';
declare const UpdateAuthDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateAuthDto extends UpdateAuthDto_base {
    countries?: Country[];
}
export {};
