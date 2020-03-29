const express = require('express');

const OngController = require('./controllers/OngController'); 
const IncidentController = require('./controllers/OngController');
const ProfileController = require('./controllers/OngController'); 
const SessionController = require('./controllers/OngController');  

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/profile', ProfieController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incident/:id ', IncidentController.delete);

module.exports = routes;
