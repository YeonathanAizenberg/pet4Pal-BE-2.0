import express , {Request, Response} from "express";
import allUsersRoutes from './routes/usersRoutes/usersRoutesController.js';
import allAdmRoutes from './routes/admRoutes/admRoutesController.js';

const app = express()

app.use('/users', allUsersRoutes);
app.use('/adm', allAdmRoutes);

app.get('/', (req: Request, res: Response): void => {
    res.json({message:"Server is running"})
})

app.listen("3001", () => {
    console.log('http://localhost:3001/')
})