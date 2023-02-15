import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const port = 8080

function handler (req:Request) {
    const url = new URL(req.url)
    const frase = url.searchParams.get('frase')
    const body = frase?.split(' ').reverse().join(' ')
    const agente = req.headers.get("user-agent") || 'Unknown'
    return new Response(body,{ status:200})   //`Agent: ${agente}`
}

await serve(handler,{port});
//serve((_req) => new Response("Hello, world"), { port: 3000 });