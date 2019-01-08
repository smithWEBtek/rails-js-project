Manager.create(name: "Unassigned", email: "not@email", password: 'password')

Manager.create(name: "Hayden Byerly", email: "HB@email", password: 'password')
Manager.create(name: "Tenzing Norgay Trainor", email: "TNT@email", password: 'password')
Manager.create(name: "Davis Cleveland", email: "DC@email", password: 'password')
Manager.create(name: "Cole Sand", email: "CS@email", password: 'password')
Manager.create(name: "Quvenzhané Wallis", email: "QW@email", password: 'password')

Project.create(name: "Project1", completed: true, client_id: 1, manager_id: 2 )
Project.create(name: "Project1", completed: false, client_id: 3, manager_id: 4 )
Project.create(name: "Project1", completed: true, client_id: 1, manager_id: 3 )
Project.create(name: "Project1", completed: true, client_id: 1, manager_id: 4 )


Client.create(name: "Max Charles", manager_id: 1)
Client.create(name: "Skai Jackson", manager_id: 1)
Client.create(name: "Kaleo Elam", manager_id: 1)
Client.create(name: "Megan Charpentier", manager_id: 3)