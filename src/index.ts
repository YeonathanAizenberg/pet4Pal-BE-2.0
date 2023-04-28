import express , {Request, Response} from "express";
const app = express()

app.get('/', (req: Request, res: Response): void => {
    res.json({message:"GET METHOD TEST"})
})

app.listen("3001", () => {
    console.log("Server Running??")
})