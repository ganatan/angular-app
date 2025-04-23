import helmet from 'helmet';
import cors from 'cors';

export default function configureSecurity(app) {
  app.use(helmet());
  app.use(cors());
}
