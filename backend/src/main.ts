import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefijo global: todas las rutas empiezan con /api/v1
  app.setGlobalPrefix('api/v1');

  // CORS: permite que el frontend (puerto 3000) se comunique con el backend
  app.enableCors();

  // ValidationPipe global: valida automáticamente los DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Filtro global de errores
  app.useGlobalFilters(new HttpExceptionFilter());

  // Interceptor global de respuestas
  app.useGlobalInterceptors(new ResponseInterceptor());

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  console.log(`🚀 Backend running on http://localhost:${port}/api/v1`);
}
bootstrap();
