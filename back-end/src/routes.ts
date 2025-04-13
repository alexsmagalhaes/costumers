import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/", {
    schema: {
      description: "Endpoint de teste que retorna um objeto simples",
      tags: ["Teste"],
      response: {
        200: {
          description: "Resposta bem-sucedida",
          type: "object",
          properties: {
            ok: { type: "boolean" },
          },
        },
      },
    },
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    },
  });

  fastify.post("/customer", {
    schema: {
      description: "Cria um novo cliente",
      tags: ["Clientes"],
      body: {
        type: "object",
        required: ["name", "email"],
        properties: {
          name: { type: "string" },
          email: { type: "string", format: "email" },
        },
      },
      response: {
        200: {
          description: "Cliente criado com sucesso",
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            status: { type: "boolean" },
          },
        },
      },
    },
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handlle(request, reply);
    },
  });

  fastify.get("/customers", {
    schema: {
      description: "Lista todos os clientes",
      tags: ["Clientes"],
      response: {
        200: {
          description: "Lista de clientes",
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              email: { type: "string" },
              status: { type: "boolean" },
            },
          },
        },
      },
    },
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomersController().handlle(request, reply);
    },
  });

  fastify.delete("/customer", {
    schema: {
      description: "Deleta um cliente pelo ID (query param)",
      tags: ["Clientes"],
      querystring: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "string", description: "ID do cliente a ser deletado" },
        },
      },
      response: {
        200: {
          description: "Cliente deletado com sucesso",
          type: "object",
          properties: {
            message: { type: "string" },
          },
        },
      },
    },
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handlle(request, reply);
    },
  });
}
