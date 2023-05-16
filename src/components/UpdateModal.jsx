
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Group, Input, Select, TextInput, Title } from '@mantine/core';
import { PRIORITIES } from '../constants/taskTypes';
import { useContext, useEffect, useRef, useState } from 'react';
import { TaskContext } from '../context/TaskContext';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function UpdateModal({ open, handleClose, activeTask }) {

  const { updateTask } = useContext(TaskContext)

  const [name, setName] = useState()
  const [priority, setPriority] = useState()


  useEffect(() => {
    setName(activeTask.name)
    setPriority(activeTask.priority)

  }, [activeTask])


  const handleConfirmClick = () => {
    updateTask({
      id: activeTask.id,
      name,
      priority
    })
    handleClose()

  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>

          <Title>Edit Task</Title>

          <TextInput
            mt={15}
            placeholder="Task Name"
            label="Full name"
            onChange={(e) => setName(e.target.value)}
            withAsterisk
            value={name}
          />

          <Select
            onChange={setPriority}
            mt={15}
            label="Priority"
            placeholder="Pick one"
            data={PRIORITIES}
            withAsterisk
            value={priority}


          />

          <Group mt={20} grow>
            <Button onClick={handleConfirmClick} color='blue' >Confirm</Button>
            <Button onClick={handleClose} color='gray' >Cancel</Button>
          </Group>

        </Box>
      </Modal>
    </>
  );
}