import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto, RegisterUserDto, UpdateAuthDto } from './dto';
import { LoginResponse } from './interfaces/login-response';
import { User } from './entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<User>;
    login(loginDto: LoginDto): Promise<LoginResponse>;
    register(registerDto: RegisterUserDto): Promise<LoginResponse>;
    findAll(req: Request): Promise<User[]>;
    checkToken(req: Request): LoginResponse;
    findOne(id: string): string;
    remove(id: string): string;
    update(id: string, updateAuthDto: UpdateAuthDto): Promise<User>;
}
