import { Router } from 'express';

const usersRouter = Router();

const users = [
    { id: 1, name: "Bruno Anjos", age: 29, email: "banjos@gmail.com" },
    { id: 2, name: "Giovana Anjos", age: 30, email: "ganjos@gmail.com" },
    { id: 3, name: "Sarah Anjos", age: 0, email: "sanjos@gmail.com" }
];

usersRouter.get('/', (request, response) => {
    return response.json(users);
})


usersRouter.post('/', (request, response) => {
    const { id, name, age, email } = request.body;

    const user = {
        id,
        name,
        age,
        email,
    };

    users.push(user);

    return response.json(user);
})

export default usersRouter;