import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [EventosController]
})
export class EventosModule {}
