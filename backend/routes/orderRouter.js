import { Router } from "express";
import {} from "../controllers/orderController.js";
import { placeOrder, cancelOrder } from "../controllers/orderController.js";

const router = Router();

router.get("/place", placeOrder);
router.post("/cancel", cancelOrder);

export default router;
