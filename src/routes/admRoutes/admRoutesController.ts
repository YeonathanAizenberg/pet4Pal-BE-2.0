import express, { Request, Response, Router } from "express";

import getPetFromDBHandler from "../../handlers/admHandlers/getPetFromDB.js";
import getAllPetsFromDBHandler from "../../handlers/admHandlers/getAllPetsFromDB.js";
import addNewPetToDBHandler from "../../handlers/admHandlers/addNewPetToDB.js";
import editPetOnDBHandler from "../../handlers/admHandlers/editPetOnDB.js";
import updatePetPictureHandler from "../../handlers/admHandlers/updatePetPicture.js";

import getUserFromDBHandler from "../../handlers/admHandlers/getUserFromDB.js";
import getAllUsersFromDBHandler from "../../handlers/admHandlers/getAllUsersFromDB.js";

const router: Router = express.Router();

router.get('/user',  (req: Request, res: Response): void => {
    const mockResponse = getAllUsersFromDBHandler();
    res.status(200).send({ response: mockResponse });
});

router.get('/user/:id',  (req: Request, res: Response): void => {
    const mockResponse = getUserFromDBHandler();
    res.status(200).send({ response: mockResponse });
});

router.get('/pets',  (req: Request, res: Response): void => {
    const mockResponse = getAllPetsFromDBHandler();
    res.status(200).send({ response: mockResponse });
});

router.get('/pet/:id',  (req: Request, res: Response): void => {
    const mockResponse = getPetFromDBHandler();
    res.status(200).send({ response: mockResponse });
});

router.post('/pet',  (req: Request, res: Response): void => {
    const mockResponse = addNewPetToDBHandler();
    res.status(200).send({ response: mockResponse });
});

router.put('/pet/img',  (req: Request, res: Response): void => {
    const mockResponse = updatePetPictureHandler();
    res.status(200).send({ response: mockResponse });
});

router.put('/pet/:id',  (req: Request, res: Response): void => {
    const mockResponse = editPetOnDBHandler();
    res.status(200).send({ response: mockResponse });
});

export default router;