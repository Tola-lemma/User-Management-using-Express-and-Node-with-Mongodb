const express = require('express');
const router = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller')
/**
 * @description Root Router
 * @method GET/
 */
router.get('/',services.homeRoutes);
/**
 * @description add user Router
 * @method GET/add-user
 */
router.get('/add-user',services.add_user);
/**
 * @description update Router
 * @method GET/update_user
 */
router.get('/update-user',services.update_user);

//API
router.post('/api/users',controller.create)
module.exports = router;