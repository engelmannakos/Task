import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Round ({mr}) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell>Round</TableCell>
                        <TableCell>Fruit</TableCell>
                        <TableCell>Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(mr).map((mini) => (
                        <TableRow>
                            <TableCell>{mr[mini].r_id}</TableCell>
                            <TableCell>{mr[mini].fruit}</TableCell>
                            <TableCell>{mr[mini].quantity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}