// src/upload.js

export const config = {
  api: {
    bodyParser: false, // Disable body parsing for FormData
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const formData = await new Promise((resolve, reject) => {
        const busboy = require("busboy");
        const bb = busboy({ headers: req.headers });

        const fields = {};
        const files = {};

        bb.on("field", (name, value) => {
          fields[name] = value;
        });

        bb.on("file", (name, file, info) => {
          const { filename, mimeType } = info;
          const chunks = [];
          file
            .on("data", (chunk) => {
              chunks.push(chunk);
            })
            .on("end", () => {
              files[name] = {
                buffer: Buffer.concat(chunks),
                filename,
                mimeType,
              };
            });
        });

        bb.on("finish", () => {
          resolve({ fields, files });
        });

        req.pipe(bb);
      });
          console.log("Data received from formData:", formData);

      // Forward data to your Node.js API
      const apiResponse = await fetch("http://localhost:8000//endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataformData),
      });
          console.log("Data received on Node.js API:", apiResponse);

      if (apiResponse.ok) {
        res.status(200).json({ message: "Data forwarded successfully" });
      } else {
        res.status(500).json({ error: "Failed to forward data" });
      }
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.setHeader("Allow", ["POST","GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
