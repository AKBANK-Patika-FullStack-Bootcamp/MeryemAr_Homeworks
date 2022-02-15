import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditEmpModal extends Component{
    constructor(props){
        super(props);
        this.state={daireler:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'kullanici',{
            method:'PUT',
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
            Kullaniciyi Duzenle
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="KullaniciId">
                        <Form.Label>KullaniciId</Form.Label>
                        <Form.Control type="text" name="KullaniciId" required 
                        placeholder="KullaniciId"
                        disabled
                        defaultValue={this.props.kullaniciid}/>
                    </Form.Group>

                    <Form.Group controlId="KullaniciAdi">
                        <Form.Label>KullaniciAdi</Form.Label>
                        <Form.Control type="text" name="KullaniciAdi" required 
                        defaultValue={this.props.kullaniciadi}
                        placeholder="KullaniciAdi"/>
                    </Form.Group>

                    <Form.Group controlId="KullaniciSoyadi">
                        <Form.Label>KullaniciSoyadi</Form.Label>
                        <Form.Control type="text" name="KullaniciSoyadi" required 
                        defaultValue={this.props.kullanicisoyadi}
                        placeholder="KullaniciSoyadi"/>
                    </Form.Group>

                    <Form.Group controlId="Kimlik">
                        <Form.Label>Kimlik</Form.Label>
                        <Form.Control type="text" name="kimlik" required 
                        defaultValue={this.props.kimlik}
                        placeholder="Kimlik"/>
                    </Form.Group>

                    {/* <Form.Group controlId="Department">
                        <Form.Label>Department</Form.Label>
                        <Form.Control as="select" defaultValue={this.props.depmt}>
                        {this.state.deps.map(dep=>
                            <option key={dep.DepartmentId}>{dep.DepartmentName}</option>)}
                        </Form.Control>
                    </Form.Group> */}

                    <Form.Group controlId="Numara">
                        <Form.Label>Numara</Form.Label>
                        <Form.Control type="text" name="numara" required 
                        defaultValue={this.props.numara}
                        placeholder="Numara"/>
                    </Form.Group>

                    <Form.Group controlId="Rol">
                        <Form.Label>Rol</Form.Label>
                        <Form.Control type="text" name="rol" required 
                        defaultValue={this.props.rol}
                        placeholder="Rol"/>
                    </Form.Group>

                    <Form.Group controlId="Plaka">
                        <Form.Label>Plaka</Form.Label>
                        <Form.Control type="text" name="plaka" required 
                        defaultValue={this.props.plaka}
                        placeholder="Plaka"/>
                    </Form.Group>



                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Kullanıcıyı Düzenle
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