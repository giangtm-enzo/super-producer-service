import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let jwtService: JwtService;

  beforeEach(() => {
    jwtService = new JwtService();
    jest
      .spyOn(jwtService, 'verifyAsync')
      .mockResolvedValue({ username: 'username' });
  });

  it('should be defined', () => {
    expect(new AuthGuard(jwtService)).toBeDefined();
  });
});
