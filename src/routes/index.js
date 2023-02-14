
const router = require("express").Router({ mergeParams: true });
import contactRoutes from "./contact.routes";

router.use("/contact", contactRoutes);

export default router;