import React, { useEffect, useState } from 'react';
import verben from '../data/verbs.json';
import { verb } from '../types/dataTypes';
import { Col, Container, Row, Table } from 'react-bootstrap';
import CommonFilters from '../components/common/CommonFilters';
interface ITableViewProps {
}



const TableView: React.FunctionComponent<ITableViewProps> = (props) => {

    const dataList: verb[] =  verben as verb[];
    const [verbenList, setVerbenList] = useState<verb[]>([]);

    const [filterVerb, setFilterVerb ] = useState<string>("");
    const [filterPast, setFilterPast ] = useState<string>("");
    const [filterPartizip, setFilterPartizip ] = useState<string>("");
    const [filterTranslate, setFilterTranslate ] = useState<string>("");


    const applyFilter = () => {

    }


    useEffect( ()=> {
        setVerbenList(dataList);
    }, [] )


    return (<>
        <Container className='mt-4'>
            <Row className='mt-4 mb-4'>
                <Col>
                <h1 className='text-center'>DIE UNREGELMÄSSIGEN VERBEN</h1>
                </Col>
            </Row>
            <Row className='mt-4 mb-4'>
                <Col>
                <CommonFilters/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Verb</th>
                                <th>Präterium</th>
                                <th>Partizip II</th>
                                <th>Перевод</th>
                                <th>Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <th><input type="text" onChange={applyFilter}/></th>
                                <th><input type="text" /></th>
                                <th><input type="text" /></th>
                                <th><input type="text" /></th>
                                <th></th>
                            </tr>

                            {
                                verbenList.map((verb, i) => <tr key={verb.id}>
                                    <td>{i+1}</td>
                                    <td>{verb.verb}</td>
                                    <td>{verb.past}</td>
                                    <td>{verb.partizip}</td>
                                    <td>{verb.translation}</td>
                                    <td>{verb.level}</td>
                                </tr>)
                            }
                        </tbody>
                    </Table>

                </Col>

            </Row>
        </Container>
    </>);
};

export default TableView;
