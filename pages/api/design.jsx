import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";

export default async function handler(req, res) {
  if (req.method === "GET") {
    /// Get the path to the JSON file
    const filePath = path.join(
      process.cwd(),
      "public",
      "data/designsData.json"
    );

    // Read the file asynchronously
    const fileData = await fs.readFile(filePath, "utf8");

    // Parse the JSON into an object
    const data = JSON.parse(fileData);

    // Return the data as JSON
    res.status(200).json(data);
  } else {
    // Handle other HTTP methods
    res.status(404).json({ message: "Not found" });
  }
}
