import express from "express";
import { saveContactMessage } from "../controller/contact.controller.js";

const router = express.Router();

// POST route for saving contact messages
router.post("/contact1", saveContactMessage);

export default router;