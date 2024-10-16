import express from "express";
import cors from "cors"; 
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const app = express();
const swaggerDocument = YAML.load("./api.yaml");
app.use(cors());

app.get("/hello", (req, res) => {
    console.log("Received request for /hello");
    const name = req.query.name || "World";
    res.json({ message: `Hello, ${name}` });
  });

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log("Swagger UI available at http://localhost:3000/swagger"));
