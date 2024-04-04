import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
   async handlle(resquest: FastifyRequest, reply: FastifyReply) {
      const { name, email } = resquest.body as { name: string, email: string };

      const customerService = new CreateCustomerService()

      const customer = await customerService.execute({ name, email })

      reply.send(customer)

   }
}

export { CreateCustomerController }