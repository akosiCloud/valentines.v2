const express = require('express');
const app = express();
const router = express.Router();
const path = require('path')
const valControllers = require('../controllers/valControllers')

router.get('/',valControllers.landing)
router.get('/next-page',valControllers.nextPage)

module.exports = router;