import { Router } from 'express';

const usersRouter = Router();

const users = [
    { name: "Bruno Anjos", age: 29, email: "banjos@gmail.com" },
    { name: "Giovana Anjos", age: 30, email: "ganjos@gmail.com" },
    { name: "Sarah Anjos", age: 0, email: "sanjos@gmail.com" }
];

usersRouter.get('/', (request, response) => {
    return response.json(users);
})

usersRouter.post('/', (request, response) => {
    const { name, age, email } = request.body;

    const user = {
        name,
        age,
        email,
    };

    users.push(user);

    return response.json(user);
})

export default usersRouter;