import { Router } from 'express';

const postsRouter = Router();

const posts = [
    { id: 1, title: "Xuxu blablablablablablabla blablablablabla" },
    { id: 2, title: "post content number 2" },
    { id: 3, title: "post number 3" }
];

postsRouter.get('/', (request, response) => {
    return response.json(posts);
})


postsRouter.post('/', (request, response) => {
    const { id, title } = request.body;

    const post = {
        id,
        title
    };

    posts.push(post);

    return response.json(post);
})

export default postsRouter;