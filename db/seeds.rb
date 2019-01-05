
Client.create(name: "Max Charles")
Client.create(name: "Skai Jackson")
Client.create(name: "Kaleo Elam")
Client.create(name: "Megan Charpentier")

Manager.create(name: "Hayden Byerly", email: "HB@email", password: 'password')
Manager.create(name: "Tenzing Norgay Trainor", email: "TNT@email", password: 'password')
Manager.create(name: "Davis Cleveland", email: "DC@email", password: 'password')
Manager.create(name: "Cole Sand", email: "CS@email", password: 'password')
Manager.create(name: "Quvenzhané Wallis", email: "QW@email", password: 'password')

Project.create(name: "Project1", completed: true, client_id: 1, manager_id: 2 )
Project.create(name: "Project1", completed: false, client_id: 3, manager_id: 4 )
Project.create(name: "Project1", completed: true, client_id: 1, manager_id: 3 )
Project.create(name: "Project1", completed: true, client_id: 1, manager_id: 4 )
