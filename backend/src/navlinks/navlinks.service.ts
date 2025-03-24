import { Injectable } from '@nestjs/common';
import { PrismaService, } from 'src/prisma/prisma.service';

@Injectable()
export class NavlinksService {

    constructor(private prisma: PrismaService){}

    getPrimary() {
        const navLinks = this.prisma.navLinks.findMany({ where: { navbar: 'primary' }});
        return navLinks;
    }

    getDashboard() {
        const navLinks = this.prisma.navLinks.findMany({ where: { navbar: 'primary'}});
        return navLinks;
    }
}
