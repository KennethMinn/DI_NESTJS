import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule], //now have access to the exported services from PowerModule -Export the provider, import the module
  exports: [DiskService], //available for other modules - Export the provider, import the module
  providers: [DiskService],
})
export class DiskModule {}
