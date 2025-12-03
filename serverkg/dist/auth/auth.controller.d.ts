import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(body: {
        name: string;
        email: string;
        password: string;
    }): Promise<import("../schemas/user.schema").User>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        user: import("../schemas/user.schema").User;
    }>;
}
