import express from "express";
import jwt from "jsonwebtoken";
import Item from "../models/Item.js";

const router = express.Router();

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token is not valid" });
  }
};

router.post("/", auth, async (req, res) => {
  const { name, description } = req.body;
  try {
    const newItem = new Item({ name, description, user: req.user.id });
    const item = await newItem.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const items = await Item.find({ user: req.user.id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: "Item not found" });
    if (item.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not authorized" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", auth, async (req, res) => {
  const { name, description } = req.body;
  try {
    let item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: "Item not found" });
    if (item.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not authorized" });

    item.name = name;
    item.description = description;
    item = await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: "Item not found" });
    if (item.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not authorized" });

    await Item.findByIdAndDelete(req.params.id);
    res.json({ msg: "Item removed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
