import { Controller, Get, Query } from '@nestjs/common'
import { CompendiumMService } from './compendium_m.service'

@Controller('compendium-m')
export class CompendiumMController {
    constructor(private comendiumMService: CompendiumMService) {}

    @Get()
    findAll() {
        return this.comendiumMService.findAll();
    }

    @Get('types')
    findTypes() {
        return this.comendiumMService.findTypes();
    }

    @Get('names')
    findNames() {
        return this.comendiumMService.findNames();
    }

    @Get('met')
    findMET(@Query('type') type: string, @Query('name') name: string) {
        return this.comendiumMService.findMET(type, name);
    }

}
