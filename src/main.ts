import { ConfigService } from '@nestjs/config/dist/config.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = Number(configService.get('PORT'));
 
  await app.listen(PORT);

  console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
}
bootstrap();
