import {Router} from 'express';
import multer from 'multer';

import OrphaControllers from './controllers/OrphaControllers'
import uploadConfig from './config/upload'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages', OrphaControllers.index)
routes.get('/orphanages/:id', OrphaControllers.show)
routes.post('/orphanages', upload.array('images'), OrphaControllers.create)


export default routes;