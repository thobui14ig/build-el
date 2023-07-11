import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
export declare type User = any;
export declare class UserService {
    private repo;
    constructor(repo: Repository<UserEntity>);
    private readonly users;
    findOne(email: string): Promise<User | undefined>;
    create(user: CreateUserDto): Promise<CreateUserDto & UserEntity>;
}
