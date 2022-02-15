import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';

export class DaireBilgileri extends Component{

    constructor(props){
        super(props);
        this.state={daireler:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+ 'DaireBilgileri')
        .then(response=>response.json())
        .then(data=>{
            this.setState({daireler:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDairex(daireid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'DaireBilgileri/'+daireid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {daireler, daireid,daireblok, dairekat, dairetip, dairestatu,  daireikameteden}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>DaireId</th>
                        <th>Blok</th>
                        <th>Kat</th>
                        <th>Tip</th>
                        <th>Statu</th>
                        <th>IkametEden</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {daireler.map(dairex=>
                            <tr key={dairex.DaireId}>

                                <td>{dairex.DaireId}</td>
                                <td>{dairex.DaireBlok}</td>
                                <td>{dairex.DaireKat}</td>
                                <td>{dairex.DaireTip}</td>
                                <td>{dairex.DaireStatu}</td>
                                <td>{dairex.DaireIkametEden}</td>
                                
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        daireid:dairex.DaireId,daireblok:dairex.DaireBlok, dairekat:dairex.DaireKat ,dairetip:dairex.DaireTip,
        dairestatu:dairex.DaireStatu,daireikameteden:dairex.DaireIkametEden})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteDairex(dairex.DaireId)}>
            Delete
        </Button>

        <EditDepModal show={this.state.editModalShow}
        onHide={editModalClose}
        daireid={daireid}
        daireblok={daireblok}
        dairekat={dairekat}
        dairetip={dairetip}
        dairestatu={dairestatu}
        daireikameteden={daireikameteden}        
        />

    </ButtonToolbar>
        </td>
            </tr>)}
                </tbody>
                    </Table>



                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Daire Ekle</Button>

                    <AddDepModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}