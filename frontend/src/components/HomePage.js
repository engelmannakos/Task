import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import Expand from './Expand'
import DialogPage from './Dialog'
import DialogPage_2 from './Dialog_2'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders : {},
            rounds: {},
            minirounds: {},
            _o_id: 0,
            _apples : 0,
            _pears : 0,
            _peaches: 0,
            _r_id : 0,
            _fruit : "",
            _quantity : 0,
            _temp : 1,
        }
        this.getRoundDetails()
        this.getOrderDetails()
        this.getminiRoundDetails()
        this.updateOrder = this.updateOrder.bind(this)
        this.updateRound = this.updateRound.bind(this)
        this.createminiRound = this.createminiRound.bind(this)
        this.makeMiniRounds = this.makeMiniRounds.bind(this)

    }

    getOrderDetails() {
        fetch("/fruit_garden/get_order/").then((response) => response.json()).then((datas) => {
            this.setState({
                orders : datas,
            })
        })
    }

    getRoundDetails() {
        fetch("/fruit_garden/get_round/").then((response) => response.json()).then((datas) => {
            this.setState({
                rounds : datas,
            })
        })
    }

    getminiRoundDetails() {
        fetch("/fruit_garden/get_miniround/").then((response) => response.json()).then((datas) => {
            this.setState({
                minirounds : datas,
            })
        })
    }

    updateOrder () {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state._o_id,
                got_apples: this.state._apples,
                got_pears: this.state._pears,
                got_peaches: this.state._peaches,
            })
        }
        fetch('/fruit_garden/update_order/', requestOptions)
    }

    updateRound () {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state._r_id,
                apples: this.state._apples,
                pears: this.state._pears,
                peaches: this.state._peaches,
            })
        }
        fetch('/fruit_garden/update_round/', requestOptions)
    }

    createminiRound () {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                r_id: this.state._r_id,
                o_id: this.state._o_id,
                fruit: this.state._fruit,
                quantity: this.state._quantity,
            })
        }
        fetch('/fruit_garden/create_miniround/', requestOptions)
    }

    makeMiniHelp (round, order) {
        console.log("MEGY A gGOZOS")
        // APPLES
        if (this.state.rounds[round].apples > 0) {
            if (this.state.orders[order].apples > this.state.orders[order].got_apples) { 
                if (this.state.orders[order].apples - this.state.orders[order].got_apples >= this.state.rounds[round].apples) {
                    this.state._apples = this.state.rounds[round].apples
                }
                else {
                    this.state._apples = this.state.orders[order].apples - this.state.orders[order].got_apples
                }
            }
            if (this.state._apples > 0) { 
                this.state._fruit = "apple"
                this.state._quantity = this.state._apples
                this.createminiRound()
            }
        }
        // PEARS
        if (this.state.rounds[round].pears > 0) {
            this.state._fruit = "pear"
            if (this.state.orders[order].pears > this.state.orders[order].got_pears) { 
                if (this.state.orders[order].pears - this.state.orders[order].got_pears >= this.state.rounds[round].pears) {
                    this.state._pears = this.state.rounds[round].pears 
                }
                else {
                    this.state._pears = this.state.orders[order].pears - this.state.orders[order].got_pears 
                }
            }
            if (this.state._pears > 0) { 
                this.state._fruit = "pear"
                this.state._quantity = this.state._pears
                this.createminiRound()
            }
        }
        // PEACHES
        if (this.state.rounds[round].peaches > 0) {
            this.state._fruit = "peach"
            if (this.state.orders[order].peaches > this.state.orders[order].got_peaches) { 
                if (this.state.orders[order].peaches - this.state.orders[order].got_peaches >= this.state.rounds[round].peaches) { 
                    this.state._peaches = this.state.rounds[round].peaches 
                }
                else {
                    this.state._peaches = this.state.orders[order].peaches - this.state.orders[order].got_peaches 
                }
            }
            if (this.state._peaches > 0) { 
                this.state._fruit = "peach"
                this.state._quantity = this.state._peaches
                this.createminiRound()
            }
        }
        this.updateOrder()
        this.updateRound()
        
        if (this.state._apples > 0 || this.state._pears > 0 || this.state._peaches > 0) {

        }
    }

    makeMiniRounds () {
        console.log("makeMiniRounds")
        for (const round in this.state.rounds) {
            this.state._r_id = this.state.rounds[round].id
            console.log("Jelenlegi round: " + this.state._r_id)
            for ( const order in this.state.orders) {
                this.state._o_id = this.state.orders[order].id
                console.log("Jelenlegi order: " + this.state._o_id)
                this.state._apples = 0
                this.state._pears = 0
                this.state._peaches = 0
                this.makeMiniHelp(round, order)     
            }
            
        }
    }


    render () {
        if (this.state._temp == 4 && this.state.orders.length > 0 && this.state.rounds.length > 0) {
            this.makeMiniRounds()
        }
        this.state._temp += 1
        return (
            <>
                <Grid style={{padding: 10}} container>
                        <DialogPage/>
                        <DialogPage_2/>
                </Grid>
                <Grid style={{padding: 10}}>
                    <Expand orders={this.state.orders} mr={this.state.minirounds}/>
                </Grid>
            </>
        )
    }
}
