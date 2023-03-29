import express from "express";
import countryRoutes from "./route/country";
import axios from 'axios'
import dotenv from 'dotenv'
const app = express();
dotenv.config()
const apiKey = process.env.OPENAI_API_KEY
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "Please visit /countries to view all the countries" });
});

app.post('/message', async(req, res) => {
  console.log('post method')
  const  { message } = req.body
  console.log(message, 111111)
  const response = await axios.post(`https://api.openai.com/v1/chat/completions`, {
    "model": "gpt-3.5-turbo-0301",
    "messages": [{"role": "user", "content": message}]
  }, {
    headers: {
      "Authorization": "Bearer " + apiKey,
      "Content-Type": "application/json"
    }
  })
  res.json(response.data)
})


app.use("/countries", countryRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
