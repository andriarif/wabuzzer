import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIxNzc2MzkxNjYyIiwibmJmIjoiMTc3NjM5MTY2MiIsImV4cCI6IjE3NzYzOTM0NjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiI0LzE3LzIwMjYgOTozNzo0MiBBTSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY2Vzc19Ub2tlbiIsIlVzZXJJZCI6IjEwOTY4NjMiLCJVc2VyTmFtZSI6IjYyODk1NDE0MzcwMTYyIiwiVXNlclBob3RvIjoiOSIsIk5pY2tOYW1lIjoiQW5kcmlwZWRpYSIsIkFtb3VudCI6IjMwLjQwIiwiSW50ZWdyYWwiOiIwIiwiTG9naW5NYXJrIjoiSDUiLCJMb2dpblRpbWUiOiI0LzE3LzIwMjYgOTowNzo0MiBBTSIsIkxvZ2luSVBBZGRyZXNzIjoiMTgyLjkuNDguMTciLCJEYk51bWJlciI6IjAiLCJJc3ZhbGlkYXRvciI6IjAiLCJLZXlDb2RlIjoiMjk2Mi","91EPU3PeGuLae4ScgcPdaLqEdMzfRpurT0Djsf9TW5c";

app.get("/", (req, res) => {
  res.send("SERVER WABUZZER AKTIF 🚀");
});

app.get("/api/prediksi", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.55fiveapi.com/api/webapi/GetGameIssue",
      {
        typeId: 30,
        language: 1,
        random: Math.random().toString(36).substring(2)
      },
      {
        headers: {
          Authorization: TOKEN,
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
