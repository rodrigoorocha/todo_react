import { ActionIcon, Alert, Group, Modal, Table } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'
import { IconAlertCircle, IconPencil, IconTrash } from '@tabler/icons-react'
import UpdateModal from './UpdateModal'
import { useDisclosure } from '@mantine/hooks'

function TodoList() {

    const { tasks, deleteTask, activeTask, setActiveTask } = useContext(TaskContext)  
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(()=> true);
    const handleClose = () => setOpen(()=> false);


    const handleUpdateClick = (task) => { 
        setActiveTask( () => ({...task}))
        handleOpen()
        
     }
    
    return (
        <>
        
        
        <UpdateModal open={open} handleClose={handleClose} activeTask={activeTask}/>
        
        <Table >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Priority</th>
                    <th></th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {tasks.map((eachTask) => (
                    <tr style={{ textAlign: "start" }} key={eachTask.id}>
                        <td>{eachTask.name}</td>
                        <td>{eachTask.priority == "3" ? (
                            <Alert icon={<IconAlertCircle size="1rem" />} title="Alta" color="red" />
                        ) : eachTask.priority == "2" ? (
                            <Alert icon={<IconAlertCircle size="1rem" />} title="Média" color="orange" />
                        ) : (
                            <Alert 
                            icon={<IconAlertCircle size="1rem" />} title="Baixa" color="green" />
                        )}

                        </td>
                        <td>
                            <ActionIcon onClick={()=>handleUpdateClick(eachTask)} color='blue'>
                                <IconPencil />
                            </ActionIcon>
                        </td>
                        <td>
                            {/* no onClick esta a referecia da funcao comm esse "()=>" */}
                            <ActionIcon onClick={()=>deleteTask(eachTask.id)} color='red'>
                                <IconTrash />
                            </ActionIcon>
                        </td>


                    </tr>

                ))}


            </tbody>
        </Table>

        </>
    )
}

export default TodoList