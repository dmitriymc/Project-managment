import {createServer} from 'miragejs'
import { Response } from 'miragejs';

export function server({ environment = "test" } = {}){
    console.log('SERVER RUN');
    let server = createServer({
        environment,
        seeds(server){
            server.db.loadData({
                projects: [
                    {
                        id:1,
                        title:"Hello",
                        state:0,
                        priority:2,
                        date:"2021-02-28T18:25:53.262Z",
                        image: "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                        teams:0,
                        createdBy:1
                    },
                    {
                        id:2,
                        title:"New project",
                        state:0,
                        priority:0,
                        date:"2021-01-01T10:00:00Z",
                        image: "https://images.pexels.com/photos/4393417/pexels-photo-4393417.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                        teams:0,
                        createdBy:1
                    },
                    {
                        id:3,
                        title:"PALMS",
                        state:2,
                        priority:0,
                        date:"2021-01-01T10:00:00Z",
                        image: "https://images.pexels.com/photos/3744162/pexels-photo-3744162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                        teams:0,
                        createdBy:1
                    }
                ],
                projectDesks: [
                    {
                        id: 1,
                        createdBy: 1,
                        date: "2021-01-16T17:43:18.692Z",
                        progress: 0,
                        projectId: 2,
                        team: 0,
                        title: "Design"
                      },
                      {
                        id: 2,
                        createdBy: 1,
                        date: "2021-01-16T17:43:18.692Z",
                        progress: 0,
                        projectId: 2,
                        team: 0,
                        title: "Programming"
                      },
                      {
                        id: 3,
                        createdBy: 1,
                        date: "2021-01-16T17:43:18.692Z",
                        progress: 0,
                        projectId: 2,
                        team: 0,
                        title: "Testing"
                      },
                      {
                        id: 4,
                        createdBy: 1,
                        date: "2021-01-16T17:43:18.692Z",
                        progress: 0,
                        projectId: 1,
                        team: 0,
                        title: "Design"
                      },
                      {
                        id: 5,
                        createdBy: 1,
                        date: "2021-01-16T17:43:18.692Z",
                        progress: 0,
                        projectId: 1,
                        team: 0,
                        title: "Programming"
                      },
                      {
                        id: 6,
                        createdBy: 1,
                        date: "2021-01-16T17:43:18.692Z",
                        progress: 0,
                        projectId: 1,
                        team: 0,
                        title: "Testing"
                      },
                      {
                        id: 7,
                        createdBy: 1,
                        date: "2021-01-16T17:43:18.692Z",
                        progress: 0,
                        projectId: 2,
                        team: 0,
                        title: "Complete"
                      },
                      {
                        id: 8,
                        createdBy: 1,
                        date: "2021-01-16T17:43:18.692Z",
                        progress: 0,
                        projectId: 2,
                        team: 0,
                        title: "New desk"
                      },
                      {
                        id: 9,
                        createdBy: 1,
                        date: "2021-01-16T17:43:18.692Z",
                        progress: 0,
                        projectId: 2,
                        team: 0,
                        title: "Project"
                      },
                      {
                        id: 10,
                        createdBy: 1,
                        date: "2021-01-16T17:43:18.692Z",
                        progress: 0,
                        projectId: 3,
                        team: 0,
                        title: "Design"
                      },
                      {
                        id: 11,
                        createdBy: 1,
                        date: "2021-01-16T17:43:18.692Z",
                        progress: 0,
                        projectId: 3,
                        team: 0,
                        title: "Programming"
                      },
                      {
                        id: 12,
                        createdBy: 1,
                        date: "2021-01-16T17:43:18.692Z",
                        progress: 0,
                        projectId: 3,
                        team: 0,
                        title: "Testing"
                      }
                ],
                cards: [
                    {
                        id: 1,
                        content: "Project card text",
                        date: "2021-01-01T00:00:00Z",
                        deskId: 1,
                        order: 1,
                        position: 0,
                        priority: 0,
                        projectId: 2,
                        type: 0,
                        status: 0,
                        title: "Project card",
                        userId: 1
                    },
                    {
                        id: 2,
                        content: "Project card text 1",
                        date: "2021-01-01T00:00:00Z",
                        deskId: 1,
                        order: 2,
                        position: 0,
                        priority: 1,
                        projectId: 2,
                        type: 0,
                        status: 2,
                        title: "Project card",
                        userId: 1
                    },
                    {
                        id: 3,
                        content: "Project card text 2",
                        date: "2021-01-01T00:00:00Z",
                        deskId: 1,
                        order: 3,
                        position: 0,
                        priority: 2,
                        projectId: 2,
                        type: 0,
                        status: 0,
                        title: "Project card",
                        userId: 1
                    },
                    {
                        id: 4,
                        content: "Project card text 3",
                        date: "2021-01-01T00:00:00Z",
                        deskId: 1,
                        order: 4,
                        position: 0,
                        priority: 0,
                        projectId: 2,
                        type: 1,
                        status: 0,
                        title: "Project card",
                        userId: 1
                    },
                    {
                        id: 5,
                        content: "Project card text 4",
                        date: "2021-01-01T00:00:00Z",
                        deskId: 1,
                        order: 5,
                        position: 0,
                        priority: 0,
                        projectId: 2,
                        type: 1,
                        status: 1,
                        title: "Project card",
                        userId: 1
                    },
                    {
                        id: 6,
                        content: "Test user 2",
                        date: "2021-01-01T00:00:00Z",
                        deskId: 1,
                        order: 6,
                        position: 0,
                        priority: 0,
                        projectId: 2,
                        type: 1,
                        status: 1,
                        title: "Project card",
                        userId: 2
                    }
                ],
                users: [
                    {
                        id: 1,
                        name: "Human",
                        email: "email",
                        login: "username",
                        password: "12345678",
                        position: 0,
                        level: 0,
                        role: 0,
                        dateRegistration: "2021-01-01T00:00:00Z",
                        online: false
                      },
                      {
                        id: 2,
                        name: "Gavin",
                        email: "email",
                        login: "username5",
                        password: "12345678",
                        avatar: "https://www.spur.org/sites/default/files/styles/inline_image_1x_tiny_/public/2016-09/Screen%20Shot%202016-09-21%20at%2012.34.44%20PM.png?itok=jB6dH2Gf",
                        position: 1,
                        level: 0,
                        role: 1,
                        dateRegistration: "2021-01-01T00:00:00Z",
                        online: false
                      },
                      {
                        id: 3,
                        name: "Big head",
                        email: "email",
                        login: "username10",
                        password: "12345678",
                        avatar: "https://pbs.twimg.com/media/ElVfLBnXEAERKcL.jpg",
                        position: 0,
                        level: 0,
                        role: 1,
                        dateRegistration: "2021-01-01T00:00:00Z",
                        online: false
                      },
                      {
                        id: 4,
                        name: "John",
                        email: "email",
                        login: "username15",
                        password: "12345678",
                        position: 0,
                        level: 0,
                        role: 2,
                        dateRegistration: "2021-01-01T00:00:00Z",
                        online: false
                      },
                      {
                        id: 5,
                        name: "Neo",
                        email: "email",
                        login: "username20",
                        password: "12345678",
                        position: 0,
                        level: 0,
                        role: 2,
                        dateRegistration: "2021-01-01T00:00:00Z",
                        online: false
                      }
                ]
            })
        },
        routes(){
            
            this.namespace = 'api';

            // cards
            
            this.get("/tasks", (schema, request) => {
                const deskId = request.queryParams.deskId;
                const userId = request.queryParams.userId;
                console.log(schema.db.cards)
                return schema.db.cards.where({deskId: deskId, userId: userId})
            })

            this.post("/tasks", (schema, request) => {
                const content = JSON.parse(request.requestBody);
                const newId = Math.max.apply(Math, schema.db.cards.map(card => card.id))+1;
                return schema.db.cards.insert({...content, order: newId})
            })

            this.delete("/tasks", (schema, request) => {
                const cardId = JSON.parse(request.requestBody)
                schema.db.cards.remove(cardId);
                return new Response("Ok")
            })

            this.get("/tasks/:id", (schema, request) => {
                const cardId = request.params.id;
                console.log(schema.db.cards)
                return schema.db.cards.find(cardId)
            })

            this.put("/tasks/:id", (schema, request) => {
                const cardId = request.params.id;
                const content = JSON.parse(request.requestBody);
                return schema.db.cards.update(cardId, content);
            })



            // projects

                // GET PROJECTS

            this.get("/projects", (schema) => {
                return schema.db.projects
            })

            this.post("/projects", (schema, request) => {
                const newId = Math.max.apply(Math, schema.db.projects.map(project => project.id))+1;
                const content = JSON.parse(request.requestBody);

                const defaultDesks = [
                    "Design", "Programming", "Test"
                ]   

                defaultDesks.forEach(desk => {
                    schema.db.projectDesks.insert({
                        createdBy: content.userId,
                        date: new Date(),
                        progress: 0,
                        projectId: newId,
                        team: 0,
                        title: desk
                    })
                })

                return schema.db.projects.insert({...content, id: newId})
            })

            this.delete("/projects", (schema, request) => {
                const projectId = +JSON.parse(request.requestBody)
                schema.db.projects.remove(projectId);
                schema.db.projectDesks.where({projectId: projectId}).destroy();
                return new Response("Ok")
            })

            

                // GET PROJECTS DESKS

                this.get("/projectDesks/:id", (schema, request) => {

                    const projectId = request.params.id;
                    return {
                        desks: schema.db.projectDesks.where({projectId: projectId}),
                        project: schema.db.projects.find(projectId)
                    }
                })

            // roles

            // GET USER

            this.get("/login", (schema, request) => {
                return schema.db.users.find(+request.queryParams.id);
            })

            this.post("/login/authenticate", (schema, request) => {
                const json = JSON.parse(request.requestBody)
                const user = schema.db.users.findBy({login: json.login, password: json.password});
                if(user){
                    return user;
                }else{
                    return new Response(400, { some: 'header' }, { error: {
                        status: 0,
                        title: 'Incorrect login or password'
                    } });
                }
            })

            

            // GET USERS

            this.get("/users", (schema) => {
                return schema.db.users;
            })

            this.post("/users", (schema, request) => {
                const json = JSON.parse(request.requestBody)
                const user = {
                    name: json.name,
                    email: json.email,
                    login: json.login,
                    password: json.password,
                    position: 0,
                    level: 0,
                    role: json.role,
                    avatar: json.avatar,
                    dateRegistration: new Date(),
                    online: false
                }
                return schema.db.users.insert(user)
            })

            this.put("/users/:userId", (schema, request) => {
                console.log(request)
                const userId = request.params.userId;
                const content = JSON.parse(request.requestBody);
                return schema.db.users.update(userId, content);
            })

        }
    })

    return server;
}