import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService], //available for other modules - Export the provider, import the module
})
export class PowerModule {}
