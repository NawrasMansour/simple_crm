import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      admin: Model,
    },

    seeds(server) {
      server.create('admin', {
        id: 1,
        email: 'eng.nawrasma@gmail.com',
        password: '123456',
      })

      server.create('admin', {
        id: 2,
        email: 'man.nawrasma@gmail.com',
        password: '123456',
      })

      server.create('user', {
        id: '04637ded-ec00-4c15-9e3d-52ed3f6977dc',
        email: 'Melba20@yahoo.com',
        first_name: 'Edgar',
        last_name: 'Corwin',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1205.jpg',
      })

      server.create('user', {
        id: 'c6e155af-eeed-404e-ad5e-ad0e6821e2ab',
        email: 'Desiree.Pagac44@gmail.com',
        first_name: 'Branson',
        last_name: 'Nolan',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/546.jpg',
      })

      server.create('user', {
        first_name: 'nawras',
        last_name: 'mansour',
        email: 'eng.nawrasma@gmail.com',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/367.jpg',
        id: 'EW74iGx',
      })

      server.create('user', {
        id: 'e463dd14-6f59-4bea-8268-cbf3042fe19c',
        email: 'Shanny.Osinski87@gmail.com',
        first_name: 'Dale',
        last_name: "O'Kon",
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/72.jpg',
      })

      server.create('user', {
        id: '24c4942b-34a0-45eb-8c98-4c24050c658d',
        email: 'Sarai_Wisozk21@yahoo.com',
        first_name: 'Genesis',
        last_name: 'Grady',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/894.jpg',
      })

      server.create('user', {
        id: '4463b25c-086a-4a9e-85d9-896e0854a09d',
        email: 'Mariah53@gmail.com',
        first_name: 'Walton',
        last_name: 'Wintheiser',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1017.jpg',
      })

      server.create('user', {
        id: 'b028a098-168d-4517-9bf5-271f65bcfa7a',
        email: 'Mateo30@yahoo.com',
        first_name: 'Tanya',
        last_name: 'Kohler',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1064.jpg',
      })

      server.create('user', {
        id: '03eecd1b-9f7a-4eb8-93db-c8da3575abeb',
        email: 'Angeline5@gmail.com',
        first_name: 'Hortense',
        last_name: 'Goldner',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/676.jpg',
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/admins/:email/:password', (schema, request) => {
        const params = request.params
        //console.log('email', params)
        return schema.admins.where({ email: params.email , password : params.password })
      })

      this.get('/users', (schema) => {
        return schema.users.all()
      })

      this.get('/users/:id', (schema, request) => {
        const id = request.params.id
        return schema.users.find(id)
      })

      let newId = 3
      this.post('/users', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        attrs.id = newId++

        return schema.users.create(attrs)
      })

      this.put('/users/:id', (schema, request) => {
        const id = request.params.id
        const attrs = JSON.parse(request.requestBody)

        return schema.users.find(id).update(attrs)
      })

      this.delete('/users/:id', (schema, request) => {
        const id = request.params.id

        return schema.users.find(id).destroy()
      })
    },
  })

  return server
}