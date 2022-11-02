import { initApp } from './services/init-app';
import { server } from './main';

server.listen(process.env.PORT, async () => {
  await initApp();
  console.log(`Server started on port ${process.env.PORT}`);
});
