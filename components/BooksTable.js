import {useEffect,useState} from 'react'

import Table from '@mui/material/Table';
import TableBody, { tableBodyClasses } from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {getBooks} from '../utils/api/authors'

export default function BooksTable(props) {
    const [authorWork, setAuthorWork] = useState([])
    useEffect(()=> {
        getBooks(props.authorKey).then((data) => {
          setAuthorWork(data.entries)
        
        }) 
       
      },[props.authorKey])

    return <TableContainer component={Paper}>
    <Table>
    <TableHead>
        <TableRow>
        <TableCell>Books in all Languages</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {authorWork.map((work)=>(
        <TableRow key={work.key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                {work.title}
            </TableCell>
        </TableRow>
       ))}
    </TableBody>
    </Table>
</TableContainer>
}