import { CpuService } from './../cpu/cpu.service';
import { DiskService } from './../disk/disk.service';
import { Controller, Get } from '@nestjs/common';

@Controller('computer')
export class ComputerController {
  constructor(
    private readonly diskService: DiskService,
    private readonly cpuService: CpuService,
  ) {}

  @Get()
  run() {
    return [this.cpuService.compute(), this.diskService.getData()];
  }
}
