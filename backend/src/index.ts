import express, { Request, Response } from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import api from './routes/user';

const app = express();
const port = process.env.PORT || '8000';
const dbAddr = process.env.DB_ADDR || 'localhost';
const dbPort = process.env.DB_PORT || '27017';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', api);

/* mongoose connection */
/* mongoose.connect('mongodb://username:password@host:port/database?options...', {useNewUrlParser: true}); */
mongoose
  .connect(`mongodb://${dbAddr}:${dbPort}/docker_test`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected successful');
  })
  .catch((error) => {
    console.log('Initial connection error');
    console.error(error);
  });

/* mongodb connection */
const db = mongoose.connection;
db.on('error', (error) => {
  console.log('Errors after initial connection');
  console.error(error);
});
db.once('open', function () {
  console.log('Connected to mongodb server');
});

app.get('/hello/:name', (req: Request, res: Response) => {
  const { name = 'World' } = req.params;

  return res.json({ hello: name });
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
