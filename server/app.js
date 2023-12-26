import express from "express";
import fetch from "node-fetch";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/chat", async (req, res) => {
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant."
      }
    ]
  };

  const { messages } = req.body;

  try {
    const messagesToConcat = Array.isArray(messages) ? messages : [];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        messages: [...data.messages, ...messagesToConcat],
      }),
    });

    const result = await response.json();
    res.json({ question: messages, answer: result.choices });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

const port = process.env.PORT || 8081;

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
