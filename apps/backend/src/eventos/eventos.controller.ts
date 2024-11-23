import { Controller, Get } from '@nestjs/common';
import { Data, Evento, eventos } from 'core';

@Controller('eventos')
export class EventosController {

    @Get()
    async buscarEventos(){
        return eventos.map(this.serializar);
    }

    private serializar(evento: Evento){
        return {
            ...evento,
            data: Data.formatar(evento.data),
        }
        
    }

    private deserializar(evento: any): Evento {
        if (!evento) return null;
        return {
          ...evento,
          data: Data.desformatar(evento.data),
        } as Evento;
      }

}
