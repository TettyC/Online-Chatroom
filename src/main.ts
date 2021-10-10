import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = '9000';
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
(async () => {
  Promise.resolve(await NestFactory.create(AppModule)).then((app) =>
    app.listen(port),
  );
})();
