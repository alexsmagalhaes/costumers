import { FormEvent, useEffect, useRef, useState } from "react"
import { api } from "./services/api"

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
    const { data } = await api.get("/customers")
    setCustomers(data)
  }

  async function handlleSubmit(e: FormEvent) {
    e.preventDefault()

    const response = await api.post("/customer", {
      name: nameRef.current?.value,
      email: emailRef.current?.value
    })

    setCustomers([...customers, response.data])
  }

  async function handlleDelete(id: string) {
    try {
      await api.delete("/customer", {
        params: {
          id: id
        }
      })

      const allCustomers = customers.filter((customer) => customer.id !== id)

      setCustomers(allCustomers)

    } catch (erro) {
      console.log(erro)
    }
  }

  return (
    <div>
      <main className="mx-auto max-w-2xl py-6">
        <h1 className="text-5xl mb-7">
          Clientes
        </h1>

        <form
          onSubmit={(e) => handlleSubmit(e)}
          className="flex flex-col border border-slate-900 divide-y-2 divide-slate-500 gap-4"
        >
          <label className="">
            <span>
              Name:
            </span>
            <input
              ref={nameRef}
              type="text"
              placeholder='Nome Completo'
              required
            />
          </label>

          <label>
            <span>
              E-Mail:
            </span>
            <input
              ref={emailRef}
              type="email"
              placeholder='Seu melhor e-mail'
              required
            />
          </label>

          <input type="submit" value="Enviar dados" />
        </form>

        <ul className="mt-11">
          {
            customers.map(({ id, name, email, status, created_at }: CustomerProp) => {
              return (
                <li className="flex flex-col" key={id}>
                  <span className="">Name: {name}</span>
                  <span>Email: {email}</span>
                  <span>Status: {status}</span>

                  <button onClick={() => handlleDelete(id)}>
                    deletar
                  </button>
                </li>
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default App
