import { createQuery } from "../Controllers/product.controllers.js";
import express from 'express'

const router = express.Router()
router.post('/createQuery', createQuery)

export default router;