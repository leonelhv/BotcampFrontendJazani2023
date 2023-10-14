import { useEffect, useState } from "react"
import { type MineralTypeResponse } from "../../domain";
import { findAll } from "../../infrastructure/MineralTypeRepository"
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const index = (): JSX.Element => {

  const [mineralTypes, setMineralTypes] = useState<MineralTypeResponse[]>()

  useEffect(() => {
    findAll().then(({ data }) => {
      setMineralTypes(data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Row className="pt-2">
        <Col xs={12}>
          <Card>
            <Card.Header>Listado de Tipo de Minerales</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Slug</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    mineralTypes?.map(mineralType => (
                      <tr key={mineralType.id}>
                        <td>{mineralType.id}</td>
                        <td>{mineralType.name}</td>
                        <td>{mineralType.description}</td>
                        <td>{mineralType.slug}</td>
                        <td>
                          <Badge pill bg={mineralType.state ? 'success' : 'danger'}>
                            {mineralType.state ? 'Activo' : 'Eliminado'}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default index