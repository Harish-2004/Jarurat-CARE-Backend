const Resource = require("../models/resourcemodel");

exports.createResource = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Validate fields
    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required." });
    }

    const resource = new Resource({ title, description, createdBy: req.user.id });
    await resource.save();
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getResourceById = async (req, res) => {
  try {
    const { id } = req.params;

    const resource = await Resource.findById(id);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found." });
    }

    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateResource = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    // Validate fields
    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required." });
    }

    const resource = await Resource.findByIdAndUpdate(
      id,
      { title, description },
      { new: true, runValidators: true }
    );

    if (!resource) {
      return res.status(404).json({ message: "Resource not found." });
    }

    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteResource = async (req, res) => {
  try {
    const { id } = req.params;

    const resource = await Resource.findByIdAndDelete(id);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found." });
    }

    res.status(200).json({ message: "Resource deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

