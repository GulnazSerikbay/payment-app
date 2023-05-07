const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/create-payment", (req, res) => {
  // Replace this with your actual payment processing logic
  const paymentData = req.body;
  console.log("Received payment data:", paymentData);

  const response = {
    status: 200,
    id: "",
    amount: 1000,
    description: "",
    currency: "",
    date: "2023-05-06",
    legal_entity: "Мерчант",
  };

  res.json(response);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
