import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';

import route from './routes/index.js';
import db from './config/db/index.js';

const app = express();
const port = 3000;

db.connect();

app.use(morgan('combined'));
app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
