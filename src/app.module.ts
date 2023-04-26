import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicioModule } from './servicio/servicio.module';

@Module({
  imports: [ServicioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
