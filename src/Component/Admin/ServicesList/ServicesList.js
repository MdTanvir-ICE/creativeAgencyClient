import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useEffect } from 'react';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.info.light,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function AdminServicesList() {
    const classes = useStyles();
    const [rows, setData] = useState([]);

    useEffect(() => {
        fetch('https://protected-taiga-89128.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data);
            })
    }, [])


    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="customized table">
                <TableHead >
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Email ID</StyledTableCell>
                        <StyledTableCell align="right">Service&nbsp;</StyledTableCell>
                        <StyledTableCell align="right"> Project Detail&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Status&nbsp;</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (

                        <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.email}</StyledTableCell>
                            <StyledTableCell align="right">{row.project}</StyledTableCell>
                            <StyledTableCell align="right">{row.about}</StyledTableCell>
                            <StyledTableCell >
                                <select id="dropdown" class="custom-select" >
                                    <option value='Pending'>{row.status}</option>
                                    <option value='Pending'>Pending</option>
                                    <option value='On going'>On going</option>
                                    <option value='Done'>Done</option>
                                </select>

                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
