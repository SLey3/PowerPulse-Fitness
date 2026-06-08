import { Injectable } from '@nestjs/common';
import * as compendium from '@/src/compendium';

@Injectable()
export class CompendiumMService {
  constructor() {}

  findAll() {
    return compendium.getCompendium();
  }

  findTypes() {
    return compendium.getTypes();
  }

  findNames() {
    return compendium.getNames();
  }

  findMET(type: string, name: string) {
    return compendium.getMET(type, name);
  }
}
