import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify"
import { CreateCustomerController } from "./controllers/CreateCustomerController"
import { ListCustomersController } from "./controllers/ListCustomersController"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
   fastify.get("/teste", async (resquest: FastifyRequest, reply: FastifyReply) => {
      return {
         ok: true
      }
   })

   fastify.post("/customer", async (resquest: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handlle(resquest, reply)
   })

   fastify.get("/customers", async (resquest: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomersController().handlle(resquest, reply)
   })
}