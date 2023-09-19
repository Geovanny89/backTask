import { Project } from '../models/Project.js'

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()

        res.json(projects)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getProject= async(req,res)=>{
    try {
        const {id}= req.params
       const projestsId= await Project.findOne({
            where:{
                id
            }
        })
        if(!projestsId){
            res.status(404).send("Project not existing")
            return
        }
        res.status(202).send(projestsId)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const createProjects = async (req, res) => {
    try {
        const { name, priority, description } = req.body
        if (!name || !priority || !description) {
            res.status(404).send("Todos los campos son obligatorios")
            return
        }
        const newProject = await Project.create({
            name,
            priority,
            description
        })

        res.json(newProject)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const updateProjects = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(404).send("No existe Id")
            return
        }
        const { name, priority, description } = req.body;
        const updateProjects = await Project.findByPk(id)
            updateProjects.name=name
            updateProjects.priority=priority
            updateProjects.description= description
        await updateProjects.save()        
        res.json(updateProjects)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const deleteProjects = async (req, res) => {
    try {
        const { id } = req.params
        await Project.destroy({
            where: {
                id,
            }
        })
        res.status(204).send('Tarea eliminada')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}