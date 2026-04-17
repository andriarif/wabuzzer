const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ TOKEN FULL
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIxNzc2MzkxNjYyIiwibmJmIjoiMTc3NjM5MTY2MiIsImV4cCI6IjE3NzYzOTM0NjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiI0LzE3LzIwMjYgOTozNzo0MiBBTSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY2Vzc19Ub2tlbiIsIlVzZXJJZCI6IjEwOTY4NjMiLCJVc2VyTmFtZSI6IjYyODk1NDE0MzcwMTYyIiwiVXNlclBob3RvIjoiOSIsIk5pY2tOYW1lIjoiQW5kcmlwZWRpYSIsIkFtb3VudCI6IjMwLjQwIiwiSW50ZWdyYWwiOiIwIiwiTG9naW5NYXJrIjoiSDUiLCJMb2dpblRpbWUiOiI0LzE3LzIwMjYgOTowNzo0MiBBTSIsIkxvZ2luSVBBZGRyZXNzIjoiMTgyLjkuNDguMTciLCJEYk51bWJlciI6IjAiLCJJc3ZhbGlkYXRvciI6IjAiLCJLZXlDb2RlIjoiMjk2MiIsIlRva2VuVHlwZSI6IkFjY2Vzc19Ub2tlbiIsIlBob25lVHlwZSI6IjEiLCJVc2VyVHlwZSI6IjAiLCJVc2VyTmFtZTIiOiJhbmRyaXBlZGlhOTBAZ21haWwuY29tIiwiaXNzIjoiand0SXNzdWVyIiwiYXVkIjoibG90dGVyeVRpY2tldCJ9.91EPU3PeGuLae4ScgcPdaLqEdMzfRpurT0Djsf9TW5c"};

const API_URL = "https://api.55fiveapi.com/api/webapi/GetGameIssue";

app.get("/api/prediksi", async (req, res) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        typeId: 30,
        language: 1,
        random: Math.random().toString(36).substring(7)
      },
      {
        headers: {
          Authorization: Bearer ${TOKEN},
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);

  } catch (err) {
    console.log("ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("SERVER WABUZZER AKTIF 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server jalan di port " + PORT);
});
