// JS

// express server specific imports
const router = require("express").Router({ mergeParams: true });

// import validation middleware
import validate from "../middleware/validate";

// import for contact form routes controller
import { ContactController } from "../controllers/contact.controller";

// add validator to the route callback
router.post("/", validate, (req, res) => {
  const controller = new ContactController(req, res);
  controller.sendContactForm();
});

export default router;