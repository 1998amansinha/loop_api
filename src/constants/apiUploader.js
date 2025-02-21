import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import admin from "firebase-admin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

admin.initializeApp({
  credential: admin.credential.cert(process.env.VITE_FIREBASE_SERVICE_ACCOUNT),
});

const firestore = admin.firestore();
const directoryPath = path.join(__dirname, "apiData");

fs.readdir(directoryPath, async (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  for (const file of files) {
    if (!file.endsWith(".json")) continue;

    const fileName = file.substring(0, file.lastIndexOf("."));
    const filePath = path.join(directoryPath, file);

    try {
      const fileContent = await fs.promises.readFile(filePath, "utf-8");
      const jsonData = JSON.parse(fileContent);

      // ✅ Skip CategoryCard.json as it does not contain resources
      if (fileName === "CategoryCard") {
        continue;
      }

      // ✅ Ensure pageProps and resources exist
      if (!jsonData.pageProps || !Array.isArray(jsonData.pageProps.resources)) {
        console.error(
          `🚨 Error: ${fileName}.json does not contain a valid 'resources' array.`
        );
        continue;
      }

      // ✅ Upload each resource as a document in Firestore
      const uploadPromises = jsonData.pageProps.resources.map((obj) => {
        return firestore.collection(fileName).doc(obj.id).set(obj);
      });

      await Promise.all(uploadPromises);
    } catch (error) {
      console.error(`🚨 Error processing file ${fileName}:`, error);
    }
  }
});
