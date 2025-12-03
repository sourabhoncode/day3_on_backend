import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    signup(name: string, email: string, password: string): Promise<import("../schemas/user.schema").User>;
    login(email: string, password: string): Promise<{
        message: string;
        user: import("../schemas/user.schema").User;
    }>;
}
