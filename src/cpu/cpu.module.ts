import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule], //now have access to the exported services from PowerModule -Export the provider, import the module
  exports: [CpuService], //available for other modules - Export the provider, import the module
  providers: [CpuService],
})
export class CpuModule {}
