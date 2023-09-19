import { Router } from "express";
const router = Router();
import { getProjects,createProjects, updateProjects, deleteProjects, getProject } from "../controller/projects.controller.js";

router.get('/projects',getProjects)

router.get('/projects/:id',getProject)

router.post('/projects',createProjects)

router.put('/projects/:id',updateProjects)

router.delete('/projects/:id',deleteProjects)

export default router