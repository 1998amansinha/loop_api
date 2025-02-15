const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

// API Endpoint to fetch all categories
exports.getCategories = functions.https.onRequest(async (req, res) => {
  try {
    const snapshot = await db.collection("categories").get();
    const categories = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

// API Endpoint to fetch APIs by category
exports.getApisByCategory = functions.https.onRequest(async (req, res) => {
  const { category } = req.query;
  if (!category) return res.status(400).json({ error: "Category is required" });

  try {
    const snapshot = await db
      .collection("apis")
      .where("category", "==", category)
      .get();
    const apis = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(apis);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch APIs" });
  }
});
