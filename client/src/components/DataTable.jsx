import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DataTable = (props) => {

    const { pirates, deleteHandler } = props
    const nav = useNavigate()

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    {
                        pirates.map((pirate, indx) =>{
                            return (
                            <TableRow key={pirate._id}>
                                <TableCell><img src={pirate.imageUrl} height='100px'/></TableCell>
                                <TableCell>{pirate.name}</TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={2}>
                                        <Button variant="outlined" onClick={()=>nav('/pirate/'+pirate._id)} size="small" startIcon={<EditIcon/>}>
                                            View Pirate
                                        </Button>
                                        <Button variant="outlined" onClick={()=>deleteHandler(pirate._id)} size='small' startIcon={<DeleteIcon />}>
                                            Walk the Plank
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>)
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DataTable