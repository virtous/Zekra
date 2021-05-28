import { Application, Router, send } from 'https://deno.land/x/oak/mod.ts';
import { join } from 'https://deno.land/std/path/mod.ts';

const app = new Application();
const router = new Router();

router.get('/', (ctx) => {
    return ctx.response.redirect('/home');
});

router.get('/account', (ctx) => {
    return ctx.response.redirect('/home');
});

router.get('/home', async (ctx) => {
    const body = await Deno.readTextFile('./public/html/home.html');
    return ctx.response.body = body;
});

router.get('/game', async (ctx) => {
    const body = await Deno.readTextFile('./public/html/game.html');
    return ctx.response.body = body;
});

// router.get('/login', async (ctx) => {
// ...  
// });

// router.post('/signup', async (ctx) => {
// ...  
// });

router.get('/css/:path+', async (ctx) => {
    await send(ctx, ctx.request.url.pathname, {
        root: join(Deno.cwd(), 'public', 'css')
    });
});

router.get('/js/:path+', async (ctx) => {
    await send(ctx, ctx.request.url.pathname, {
        root: join(Deno.cwd(), 'public', 'js')
    });
});

// router.post('/account', async (ctx) => {
// ...  
// });

for (const route of [router.routes, router.allowedMethods]) {
    app.use(route());
}

app.listen({ port: 8000 });