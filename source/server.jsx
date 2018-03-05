import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

const imageList = [
  {
    key: 0,
    url: 'https://process.filestackapi.com/sharpen/negative/sb5RRdoQiiy5l5JUglB1',
  },
  {
    key: 1,
    url: 'https://process.filestackapi.com/sharpen/oil_paint/urjTyRrAQA6sUzK2qIsd',
  },
  {
    key: 2,
    url: 'https://process.filestackapi.com/sepia/modulate/wxYyL4yQyyRH1RQLZ6gL',
  },
];

app.route('/api')
    .get((req, res) => res.json(imageList))
    .post((req, res) => {
      const { url } = req.body;
      imageList.push({
        key: imageList.lenght,
        url,
      });
      res.json({
        success: 1,
        message: 'Image successfully added!',
      });
    });

app.listen(port);
console.log(`Listening on port ${port}`);
