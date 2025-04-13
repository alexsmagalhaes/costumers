import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";
import { request } from "http";

class DeleteCustomerController {
   async handlle(request: FastifyRequest, reply: FastifyReply) {

      const { id } = request.query as { id: string }

      const customerService = new DeleteCustomerService()

      const customer = customerService.execute({ id })

      reply.send(customer)
   }
}

export { DeleteCustomerController }