import React, { useContext, useRef, useState } from 'react'
import { ActionIcon, Container, Grid, Group, Radio, TextInput, Title } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { v1 } from 'uuid'
import { TaskContext } from '../context/TaskContext'

function TodoCreate() {
    const { createTask } = useContext(TaskContext)

    const [priority, setPriority] = useState("1")

    const textInputRef = useRef()


    const handleClick = () => {
        const newTask = {
            id: v1(),
            name: textInputRef.current.value,
            priority
        }
        createTask(newTask)

    }

    

    return (


        <>

            <Title>Todo List</Title>


            <Grid justify='center' align='center' my={20}>
                <TextInput ref={textInputRef} placeholder='Enter task' />
                <Radio.Group
                    defaultValue={"1"}
                    value={priority}
                    onChange={setPriority}
                    name="priority"

                >

                    <Group px={20} >
                        <Radio value={"1"} label="Baixo" />
                        <Radio value={"2"} label="Médio" />
                        <Radio value={"3"} label="Alto" />
                    </Group>



                </Radio.Group>
                <ActionIcon onClick={handleClick}>
                    < IconPlus />
                </ActionIcon>
            </Grid>
        </>

    )
}

export default TodoCreate