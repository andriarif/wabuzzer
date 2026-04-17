import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

// 👉 TOKEN kamu (WAJIB pakai Bearer)
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIxNzc2MzkxNjYyIiwibmJmIjoiMTc3NjM5MTY2MiIsImV4cCI6IjE3NzYzOTM0NjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiI0LzE3LzIwMjYgOTozNzo0MiBBTSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY2Vzc19Ub2tlbiIsIlVzZXJJZCI6IjEwOTY4NjMiLCJVc2VyTmFtZSI6IjYyODk1NDE0MzcwMTYyIiwiVXNlclBob3RvIjoiOSIsIk5pY2tOYW1lIjoiQW5kcmlwZWRpYSIsIkFtb3VudCI6IjMwLjQwIiwiSW50ZWdyYWwiOiIwIiwiTG9naW5NYXJrIjoiSDUiLCJMb2dpblRpbWUiOiI0LzE3LzIwMjYgOTowNzo0MiBBTSIsIkxvZ2luSVBBZGRyZXNzIjoiMTgyLjkuNDguMTciLCJEYk51bWJlciI6IjAiLCJJc3ZhbGlkYXRvciI6IjAiLCJLZXlDb2RlIjoiMjk2Mi","91EPU3PeGuLae4ScgcPdaLqEdMzfRpurT0Djsf9TW5c";

// 👉 endpoint test
app.get("/", (req, res) => {
  res.send("SERVER RUNNING 🚀");
});

// 👉 ambil data dari API 55five
app.get("/api", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.55fiveapi.com/api/webapi/GetGameIssue",
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/json, text/plain, */*",
          Authorization: TOKEN,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("ERROR API:", error.message);
    res.status(500).json({
      error: "Gagal ambil data",
      detail: error.message,
    });
  }
});

// 👉 start server
app.listen(PORT, () => {
  console.log(Server jalan di port ${PORT});
});
