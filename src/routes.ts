import { Router } from 'express';
import { MessagersController } from './controllers/MessagersController';
import { SettingsController } from './controllers/SettingsController'
import { UsersController } from './controllers/UsersController';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagersController = new MessagersController();



routes.post('/settings', settingsController.create);
routes.get('/settings/:username', settingsController.findByUsername);
routes.put('/settings/:username', settingsController.update);

routes.post('/users', usersController.create);

routes.post('/messagers', messagersController.create);
routes.get('/messagers/:id', messagersController.showByUser);




export { routes }