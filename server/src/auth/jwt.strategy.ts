/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
import { UserPayload } from './interface/userPayload.interface';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => req?.cookies?.access_token || null,
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || '',
    });
  }

  async validate(payload: UserPayload) {
    const user = await this.userService.findUserById(payload.sub);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
