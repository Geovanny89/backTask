import express  from "express";
import projectsRoutes from './routes/projects.rutes.js'
import taskRouter from './routes/tasks.routes.js'
const app= express();

//middleware

app.use(express.json())

app.use(projectsRoutes)
app.use(taskRouter)

export default app;