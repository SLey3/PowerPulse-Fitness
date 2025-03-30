import { Controller, Post, Body, HttpCode } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SignUpDto, SignInDto, VerifyUserDto } from './dto'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    async signUp(@Body() signupDto: SignUpDto) {
        return this.authService.signUp(signupDto);
    }

    @HttpCode(200)
    @Post('signin')
    async signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto);
    }

    @HttpCode(200)
    @Post('validate-jwt')
    async validateJwt(@Body() validateJwtDto: VerifyUserDto) {
        // we use VerifyUserDto as validateJwt uses the same parameters as verifyUser
        return this.authService.validateJwt(validateJwtDto.jwt);
    }

    @HttpCode(200)
    @Post('verify-user')
    async verifyUser(@Body() verifyUserDto: VerifyUserDto) {
        return this.authService.verifyUser(verifyUserDto);
    }
}
