import { FormEvent, useEffect, useRef, useState } from "react"
import { api } from "./services/api"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface CustomerProp {
  id: string,
  name: string,
  email: string,
  status: string,
  created_at: string
}

function App() {

  const [customers, setCustomers] = useState<CustomerProp[]>([])

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    loadCustomers()
  }, [])

  async function loadCustomers() {
    try {
      const { data } = await api.get("/customers")
      setCustomers(data)
    } catch (error) {
      toast.error("Erro ao carregar os clientes.")
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      const response = await api.post("/customer", {
        name: nameRef.current?.value,
        email: emailRef.current?.value
      })

      setCustomers([...customers, response.data])
      toast.success("Cliente adicionado com sucesso!")
    } catch (error) {
      toast.error("Erro ao adicionar o cliente.")
    }
  }

  async function handleDelete(id: string) {
    try {
      await api.delete("/customer", {
        params: {
          id: id
        }
      })

      const allCustomers = customers.filter((customer) => customer.id !== id)
      setCustomers(allCustomers)
      toast.success("Cliente deletado com sucesso!")
    } catch (error) {
      toast.error("Erro ao deletar o cliente.")
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <main className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-4xl font-semibold text-center mb-8 text-gray-700">
          Clientes
        </h1>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 mb-8"
        >
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-2" htmlFor="name">Nome:</label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              placeholder="Nome Completo"
              required
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-2" htmlFor="email">E-mail:</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              placeholder="Seu melhor e-mail"
              required
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Enviar Dados
          </button>
        </form>

        <ul>
          {customers.map(({ id, name, email, status, created_at }: CustomerProp) => {
            return (
              <li key={id} className="bg-gray-50 p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{name}</h3>
                  <p className="text-sm text-gray-500">Email: {email}</p>
                  <p className="text-sm text-gray-500">Status: {status}</p>
                </div>

                <button
                  onClick={() => handleDelete(id)}
                  className="ml-4 py-1 px-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Deletar
                </button>
              </li>
            )
          })}
        </ul>
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
