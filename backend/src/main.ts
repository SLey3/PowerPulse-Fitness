/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors(['http://localhost:3000', /\.localhost:3000$/]); // TODO change into env variables for frontend url
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrs = []) => {
        return new BadRequestException(
          validationErrs.map((error) => ({
            field: error.property,
            error: Object.values(error.constraints!).join(', '),
          })),
        );
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3100);
}
bootstrap();
