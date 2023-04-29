import express, { Request, Response, Router } from "express";

import createAccountHandler from "../../handlers/usersHandlers/createAccount.js";
import logInHandler from "../../handlers/usersHandlers/logIn.js";
import editUserHandler from "../../handlers/usersHandlers/editUser.js";

import searchADVForPetHandler from "../../handlers/usersHandlers/searchADVForPet.js";
import searchForPetHandler from "../../handlers/usersHandlers/searchForPet.js";

import getUserByEmailHandler from "../../handlers/usersHandlers/getUserByEmail.js";
import getUserByIDHandler from "../../handlers/usersHandlers/getUserByID.js";

import getPetByOwnerHandler from "../../handlers/usersHandlers/getPetByOwner.js";
import getSavedPetsByOwnerHandler from "../../handlers/usersHandlers/getSavedPetsByOwner.js";
import getFavoritesPetsByOwnerHandler from "../../handlers/usersHandlers/getFavoritesPetsByOwner.js";

import setPetToAdoptedHandler from "../../handlers/usersHandlers/setPetToAdopted.js";
import addPetToSavedTableHandler from "../../handlers/usersHandlers/addPetToSavedTable.js";

import removePetFromSavedTableHandler from "../../handlers/usersHandlers/removePetFromSavedTable.js";

const router: Router = express.Router();

router.get("/search", (req: Request, res: Response): void => {
    const mockResponse = searchForPetHandler();
    res.status(200).send({ response: mockResponse });
});

router.get("/adv_search", (req: Request, res: Response): void => {
    const mockResponse = searchADVForPetHandler();
    res.status(200).send({ response: mockResponse });
});

router.get("/pet/:ownerId", (req: Request, res: Response): void => {
    const mockResponse = getPetByOwnerHandler();
    res.status(200).send({ response: mockResponse });
});

router.get("/myPets/:ownerId", (req: Request, res: Response): void => {
    const mockResponse = getFavoritesPetsByOwnerHandler();
    res.status(200).send({ response: mockResponse });
});

router.get('/pet/:id/:ownerId', (req: Request, res: Response): void => {
    const mockResponse = getSavedPetsByOwnerHandler();
    res.status(200).send({ response: mockResponse });
});

router.get("/:id", (req: Request, res: Response): void => {
    const mockResponse = getUserByIDHandler();
    res.status(200).send({ response: mockResponse });
});

router.post("/pet/:id/:ownerId", (req: Request, res: Response): void => {
    const mockResponse = addPetToSavedTableHandler();
    res.status(200).send({ response: mockResponse });
});

router.post("/login", (req: Request, res: Response): void => {
    const mockResponse = logInHandler();
    res.status(200).send({ response: mockResponse });
});

router.post("/", (req: Request, res: Response): void => {
    const mockResponse = getUserByEmailHandler();
    const mockResponseTwo = createAccountHandler();
    res.status(200).send({ response: mockResponse + " && " +  mockResponseTwo});
});

router.put("/pet/:id", (req: Request, res: Response): void => {
    const mockResponse = setPetToAdoptedHandler();
    res.status(200).send({ response: mockResponse });
});

router.put("/:id", (req: Request, res: Response): void => {
    const mockResponse = editUserHandler();
    res.status(200).send({ response: mockResponse });
});

router.delete("/pet/:id/:ownerId", (req: Request, res: Response): void => {
    const mockResponse = removePetFromSavedTableHandler();
    res.status(200).send({ response: mockResponse });
});

export default router;