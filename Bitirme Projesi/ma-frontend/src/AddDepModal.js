//DAIRE EKLEME


import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddDepModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'DaireBilgileri',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DaireId:null,
                Blok:event.target.Blok.value,
                Kat:event.target.Kat.value,
                Tip:event.target.Tip.value,
                Statu:event.target.Statu.value,
                IkametEden:event.target.IkametEden.value

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
            Daire Ekle
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Blok">
                        <Form.Label>Blok</Form.Label>
                        <Form.Control type="text" name="Blok" required 
                        placeholder="Blok"/>
                    </Form.Group>

                    <Form.Group controlId="Kat">
                        <Form.Label>Kat</Form.Label>
                        <Form.Control type="text" name="Kat" required 
                        placeholder="Kat"/>
                    </Form.Group>

                    <Form.Group controlId="Tip">
                        <Form.Label>Tip</Form.Label>
                        <Form.Control type="text" name="Tip" required 
                        placeholder="Tip"/>
                    </Form.Group>

                    <Form.Group controlId="Statu">
                        <Form.Label>Statu</Form.Label>
                        <Form.Control type="text" name="Statu" required 
                        placeholder="Statu"/>
                    </Form.Group>

                    <Form.Group controlId="IkametEden">
                        <Form.Label>IkametEden</Form.Label>
                        <Form.Control type="text" name="IkametEden" required 
                        placeholder="IkametEden"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Daire Ekle
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