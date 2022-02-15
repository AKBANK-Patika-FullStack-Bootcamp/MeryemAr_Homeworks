import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddEmpModal} from './AddEmpModal';
import {EditEmpModal} from './EditEmpModal';

export class KullaniciBilgileri extends Component{

    constructor(props){
        super(props);
        this.state={kullanicilar:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'kullanici')
        .then(response=>response.json())
        .then(data=>{
            this.setState({KullaniciBilgileri:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteKullanici(kullaniciid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'kullanicilar/'+kullaniciid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {kullanicilar, kullaniciid,kullaniciadi, kullanicisoyadi,kimlik, numara,mail,rol,plaka}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>KullaniciId</th>
                        <th>KullaniciAdi</th>
                        <th>KullaniciSoyadi</th>
                        <th>Kimlik</th>
                        <th>Numara</th>
                        <th>Mail</th>
                        <th>Rol</th>
                        <th>Plaka</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kullanicilar.map(kullanicix=>
                            <tr key={kullanicix.KullaniciId}>
                                <td>{kullanicix.KullaniciId}</td>
                                <td>{kullanicix.KullaniciAdi}</td>
                                <td>{kullanicix.KullaniciSoyadi}</td>
                                <td>{kullanicix.Kimlik}</td>
                                <td>{kullanicix.Numara}</td>
                                <td>{kullanicix.Mail}</td>
                                <td>{kullanicix.Rol}</td>
                                <td>{kullanicix.Plaka}</td>
                                <td>

                                    
<ButtonToolbar>

    <Button className="mr-2" variant="info"
        onClick={()=>this.setState({editModalShow:true,

        kullaniciid:kullanicix.KullaniciId, kullaniciadi:kullanicix.KullaniciAdi,kullanicisoyadi:kullanicix.KullaniciSoyadi,
        kimlik:kullanicix.Kimlik,numara:kullanicix.Numara,mail:kullanicix.Mail,rol:kullanicix.Rol,Plaka:kullanicix.Plaka })}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
        onClick={()=>this.deleteKullanici(kullanicix.KullaniciId)}>
            Delete
        </Button>

        <EditEmpModal show={this.state.editModalShow}
        onHide={editModalClose}
        kullaniciid={kullaniciid}
        kullaniciadi={kullaniciadi}
        kullanicisoyadi={kullanicisoyadi}
        numara={numara}
        kimlik={kimlik}
        mail={mail}
        rol={rol}
        plaka={plaka}
         />

            </ButtonToolbar>
                 </td>
                    </tr>)}
                        </tbody>
                            </Table>


                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Kullanici Ekle</Button>

                    <AddEmpModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}