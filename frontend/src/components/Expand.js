import React from 'react'
import {Grid,IconButton, Collapse, Box} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import Round from './Round'

export default function Expand({orders, mr}){
    const [value, setValue] = React.useState(0);
    var mrf = {}
    console.log(mr)


    const Row = (props) => {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        return (
            <React.Fragment>
                <TableRow hover>
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell onClick={() => setValue(row.id)}> {row.id} </TableCell>
                    <TableCell> {row.date} </TableCell>
                    <TableCell> {row.collected} / {row.all_fruit} </TableCell>
                    <TableCell> {row.status} </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Fruit</TableCell>
                                            <TableCell>Collected</TableCell>
                                            <TableCell>Requested</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Apple</TableCell>
                                            <TableCell>{row.got_apples}</TableCell>
                                            <TableCell>{row.apples}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Pear</TableCell>
                                            <TableCell>{row.got_pears}</TableCell>
                                            <TableCell>{row.pears}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Peach</TableCell>
                                            <TableCell>{row.got_peaches}</TableCell>
                                            <TableCell>{row.peaches}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        )
    }

    return(
            <Grid container spacing={2}>
                <Grid item m={8} align="left">
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow >
                                    <TableCell/>
                                    <TableCell>Order Number</TableCell>
                                    <TableCell>Order Date</TableCell>
                                    <TableCell>Collected / All</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(orders).map((order) => (
                                    <Row key={orders[order].id} row={orders[order]}/>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item m={4} align="right">
                    { (value > 0 && mr.length > 0) ? (mrf = mr.filter(mini => mini.o_id == value), <Round  mr={mrf}/> ): <Round  mr={{}}/>}
                </Grid>   
            </Grid>         
    )
}