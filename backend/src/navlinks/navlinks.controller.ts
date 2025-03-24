import { Controller, Get } from '@nestjs/common'
import { NavlinksService } from './navlinks.service'

@Controller('navlinks')
export class NavlinksController {
    constructor(private navlinks: NavlinksService){}

    @Get("primary")
    getPrimary() {
        return this.navlinks.getPrimary();
    }

    @Get('dashboard')
    getDashboard() {
        return this.navlinks.getDashboard();
    }
}
