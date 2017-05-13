import express from 'express';
import React from 'react';

const app = express();

function requestHandler(request, response) {

}

app.get('*', requestHandler);

app.listen(3000);
