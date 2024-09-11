import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { RegisterUserDto, CreateUserDto, UpdateAuthDto, LoginDto } from './dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<User>;
    register(registerDto: RegisterUserDto): Promise<LoginResponse>;
    login(loginDto: LoginDto): Promise<LoginResponse>;
    findAll(): Promise<User[]>;
    findUserById(id: string): Promise<{
        _id: string;
        email: string;
        name: string;
        isActive: boolean;
        roles: string[];
        countries: import("mongoose").FlattenMaps<import("./entities/country.entity").Country>[];
    }>;
    findOne(id: number): string;
    remove(id: number): string;
    getJwtToken(payload: JwtPayload): string;
    update(id: string, updateAuthDto: UpdateAuthDto): Promise<User>;
}
