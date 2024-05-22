import { PowerService } from './../power/power.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CpuService {
  constructor(private readonly powerService: PowerService) {}

  compute() {
    console.log('Drawing 10 watts of power from power services');
    this.powerService.supplyPower(10);
    return 'computing';
  }
}
