import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(userData: any): Promise<User>;
    findUserByEmail(email: string): Promise<User | null>;
}
