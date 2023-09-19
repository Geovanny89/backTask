import { Task } from "../models/Task.js";

export const getTasks=async (req,res)=>{
    try {
        const allTask = await Task.findAll()
        res.status(200).send(allTask)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const getTask=async (req,res)=>{
    const {id}= req.params
    try {
        const task = await Task.findOne({
            where:{
                id
            }
        })
        res.status(202).send(task)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}
export const createTask= async(req,res)=>{
    try {
        const {name,projectId}= req.body
        const newTask = await Task.create({
            name,
            projectId
        })
        res.status(200).send(newTask)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const updateTask= async(req,res)=>{
    const {id}= req.params
    try {
        const updateTask = await Task.findOne({
            where:{
                id
            }
        })
        updateTask.set(req.body)
        updateTask.save()
        res.status(200).send(updateTask)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const deleteTask=async (req,res)=>{
    try {
        const {id} = req.params
        await Task.destroy({
            where:{
                id
            }
        })
        res.status(200).send('Tarea eliminada')
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}