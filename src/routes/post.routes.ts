import { Router } from 'express';

const postsRouter = Router();

const posts = [
    { id: 0, title: "Xuxu blablablablablablabla blablablablabla" },
    { id: 1, title: "post content number 2" },
    { id: 2, title: "post number 3" }
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

postsRouter.delete('/', (request, response) => {

    const { id } = (request.query as any);

    console.log(`id = ${id}`);

    let index = posts.findIndex(x => x.id == id);

    console.log(`index = ${index}`);

    if (index == -1) {
        console.log(`Do not exists`);
        return response.json({ error: 'Do not exists' }).status(404);
    }

    posts.splice(index, 1)
    console.log(posts);

    return response.json(posts).status(200);
})

export default postsRouter;