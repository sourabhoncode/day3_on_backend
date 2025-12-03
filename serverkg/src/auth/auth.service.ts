/* eslint-disable prettier/prettier */
import { Injectable, BadRequestException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signup(name: string, email: string, password: string) {
    const exists = await this.userService.findUserByEmail(email);
    if (exists) {
      throw new BadRequestException('Email already exists');
    }

    return this.userService.createUser({ name, email, password });
  }

  async login(email: string, password: string) {
    const user = await this.userService.findUserByEmail(email);

    if (!user || user.password !== password) {
      throw new BadRequestException('Invalid email or password');
    }

    return { message: 'Login Success', user };
  }
}
