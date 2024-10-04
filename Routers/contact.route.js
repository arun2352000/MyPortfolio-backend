import { createContact } from "../Controllers/product.controllers.js";
import express from 'express'

const router = express.Router()
router.post('/createcontact', createContact)

export default router;