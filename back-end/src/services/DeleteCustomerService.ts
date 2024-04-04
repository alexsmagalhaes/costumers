interface DeleteCustomerProps {
   id: string
}

class DeleteCustomerService {
   async execute({ id }: DeleteCustomerProps) {

      if(!id){
         throw new Error("Solicitação inválida")
      }

      return
   }
}

export { DeleteCustomerService }