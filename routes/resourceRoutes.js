const express = require("express");
const { 
  createResource, 
  getAllResources, 
  getResourceById, 
  updateResource, 
  deleteResource 
} = require("../controllers/resourceController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

// Route to create a new resource (Admin access only)
router.post("/create", authMiddleware, roleMiddleware(["Admin"]), createResource);

// Route to retrieve all resources (accessible to both Admin and User)
router.get("/all", authMiddleware, getAllResources);

// Route to retrieve a resource by its ID (accessible to both Admin and User)
router.get("/byId/:id", authMiddleware, getResourceById);

// Route to update a resource by its ID (Admin access only)
router.put("/update/:id", authMiddleware, roleMiddleware(["Admin"]), updateResource);

// Route to delete a resource by its ID (Admin access only)
router.delete("/delete/:id", authMiddleware, roleMiddleware(["Admin"]), deleteResource);

module.exports = router;
