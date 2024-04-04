import prismaClient from "../prisma"

class ListCustomersService{

   async excute(){

      const customers = await prismaClient.customer.findMany()

      return customers
   }

}

export {ListCustomersService}