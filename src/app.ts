import express, {Application} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT as string || 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});