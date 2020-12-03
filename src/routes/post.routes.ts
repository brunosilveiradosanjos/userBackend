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

    const { title } = request.body;
    const id = posts.length + 1;

    const post = {
        id,
        title
    };

    posts.unshift(post);
    return response.json(posts);
});


postsRouter.delete('/', (request, response) => {

    const { id } = (request.query as any);

    let index = posts.findIndex(x => x.id == id);

    if (index == -1) {
        // return response.json({ error: 'Post already deleted', status: 404 }).status(404);
        return response.status(404).send({ error: 'Post already deleted', status: 404 });
    }

    posts.splice(index, 1)

    return response.json(posts).status(200);
});



export default postsRouter;