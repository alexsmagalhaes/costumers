import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { routes } from "./routes";

const app = fastify({ logger: true });

const initSwagger = async () =>
  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "Costumers API",
        description:
          "Projeto de teste de integração comDB externo e documentação",
        version: "0.1.0",
      },
    },
  });

initSwagger();

app.register(fastifySwaggerUI, {
  routePrefix: "/docs",
});

app.register(routes);

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  await app.register(fastifyCors, {
    origin: true,
  });

  try {
    await app.listen({ port: 3333 });
    console.log("Server running at http://localhost:3333");
    console.log("Swagger docs at http://localhost:3333/docs");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
