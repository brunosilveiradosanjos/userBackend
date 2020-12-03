import { response, Router } from 'express';

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
    const id = posts.length;

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

    return response.status(200).json(posts);
});

postsRouter.put('/', (request, response) => {
    const { id } = request.body;

    let index = posts.findIndex(x => x.id == id);

    posts[index].title = posts[index].title.toUpperCase();
    // console.log(posts[index].title.toUpperCase());

    return response.status(200).json(posts);
})



export default postsRouter;