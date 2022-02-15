//KULLANICI EKLEME

import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddEmpModal extends Component{
    constructor(props){
        super(props);
        this.state={daireler:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    

    componentDidMount(){
        fetch(process.env.REACT_APP_API+'daire')
        .then(response=>response.json())
        .then(data=>{
            this.setState({daireler:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'kullanici',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            
            body:JSON.stringify({
                EmployeeId:null,
                KullaniciAd:event.target.KullaniciAd.value,
                KullaniciSoyad:event.target.KullaniciSoyad.value,
                Kimlik:event.target.Kimlik.value,
                Numara:event.target.Numara.value,
                Mail:event.target.Mail.value,
                Rol:event.target.Rol.value,
                Plaka:event.target.Plaka.value,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
        
    
    render(){
        return (
            <div className="container">

    <Modal
    {...this.props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Kullanici Ekle
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="KullaniciAdi">
                        <Form.Label>KullaniciAdi</Form.Label>
                        <Form.Control type="text" name="KullaniciAdi" required 
                        placeholder="KullaniciAdi"/>
                    </Form.Group>

                    {/* <Form.Group controlId="KullaniciSoyadi">
                        <Form.Label>KullaniciSoyadi</Form.Label>
                        <Form.Control as="select">
                        {this.state.daireler.map(dairex=>
                            <option key={dairex.DaireId}>{dairex.Blok}</option>)}
                        </Form.Control>
                    </Form.Group> */}

                    <Form.Group controlId="Kimlik">
                        <Form.Label>Kimlik</Form.Label>
                        <Form.Control 
                        type="integer"
                        name="Kimlik"
                        required
                        placeholder="Kimlik"
                        />
                    </Form.Group>

                    <Form.Group controlId="Numara">
                        <Form.Label>Numara</Form.Label>
                        <Form.Control 
                        type="integer"
                        name="Numara"
                        required
                        placeholder="Numara"
                        />
                    </Form.Group>

                    <Form.Group controlId="Mail">
                        <Form.Label>Mail</Form.Label>
                        <Form.Control 
                        type="E-Mail"
                        name="Mail"
                        required
                        placeholder="Mail"
                        />
                    </Form.Group>

                    <Form.Group controlId="Rol">
                        <Form.Label>Rol</Form.Label>
                        <Form.Control 
                        type="string"
                        name="Rol"
                        required
                        placeholder="Rol"
                        />
                    </Form.Group>

                    <Form.Group controlId="Plaka">
                        <Form.Label>Plaka</Form.Label>
                        <Form.Control 
                        type="string"
                        name="Plaka"
                        required
                        placeholder="Plaka"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Kullanici Ekle
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
        </Modal.Body>
    
        <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
        </div>
        )
    }

}