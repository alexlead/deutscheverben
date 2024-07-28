import React, { useEffect, useState } from 'react';
import verben from '../data/verbs.json';
import { verb } from '../types/dataTypes';
import { Col, Container, Row, Table } from 'react-bootstrap';
import CommonFilters from '../components/common/CommonFilters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { playText } from '../helpers/playText';
interface ITableViewProps {
}



const TableView: React.FunctionComponent<ITableViewProps> = () => {

    const dataList: verb[] =  verben as verb[];
    const [verbenList, setVerbenList] = useState<verb[]>([]);

    const [filterVerb, setFilterVerb ] = useState<string>("");
    const [filterPast, setFilterPast ] = useState<string>("");
    const [filterPartizip, setFilterPartizip ] = useState<string>("");
    const [filterTranslate, setFilterTranslate ] = useState<string>("");
    const [filterLevels, setFilterLevels ] = useState<string[]>([])

    const updateFilterLevels = (levelsList: string[]) => {
        setFilterLevels(levelsList)
    }

    const playVerb = (verb: string) => {
        playText( verb, "de-DE" );
    }

    useEffect( ()=> {
        let verbList = [...dataList]

        if( filterLevels.length ) {
            verbList = [ ... verbList.filter((item)=>filterLevels.includes(item.level)) ]
        }

        if(filterVerb.length){
            verbList = [ ... verbList.filter((item)=>item.verb.includes(filterVerb))]
                }
        if(filterPast.length){
            verbList = [ ... verbList.filter((item)=>item.past.includes(filterPast))]
                }
        if(filterPartizip.length){
            verbList = [ ... verbList.filter((item)=>item.partizip.includes(filterPartizip))]
                }
        if(filterTranslate.length){
            verbList = [ ... verbList.filter((item)=>item.translation.includes(filterTranslate))] 
               }
  
        setVerbenList(verbList);
    }, [ filterVerb, filterPast, filterPartizip, filterTranslate, filterLevels ] )



    

    return (<>
        <Container className='mt-4'>
            <Row className='mt-4 mb-4'>
                <Col>
                <h1 className='text-center'>DIE UNREGELMÄSSIGEN VERBEN</h1>
                </Col>
            </Row>
            <Row className='mt-4 mb-4'>
                <Col>
                <CommonFilters filterLevels={filterLevels} updateFilterLevels={updateFilterLevels}/>
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
                                <th><input type="text" onChange={(e)=>setFilterVerb(e.target.value)} value={filterVerb} /></th>
                                <th><input type="text" onChange={(e)=>setFilterPast(e.target.value)} value={filterPast} /></th>
                                <th><input type="text" onChange={(e)=>setFilterPartizip(e.target.value)} value={filterPartizip} /></th>
                                <th><input type="text" onChange={(e)=>setFilterTranslate(e.target.value)} value={filterTranslate} /></th>
                                <th></th>
                            </tr>

                            {
                                verbenList.map((verb, i) => <tr key={verb.id}>
                                    <td>{i+1}</td>
                                    <td>{verb.verb} &nbsp;&nbsp;&nbsp;&nbsp;<span className='clickable'><FontAwesomeIcon icon={faVolumeHigh} onClick={()=> playVerb( verb.verb )}/></span></td>
                                    <td>{verb.past} &nbsp;&nbsp;&nbsp;&nbsp;<span className='clickable'><FontAwesomeIcon icon={faVolumeHigh} onClick={()=> playVerb( verb.past )}/></span></td>
                                    <td>{verb.partizip} &nbsp;&nbsp;&nbsp;&nbsp;<span className='clickable'><FontAwesomeIcon icon={faVolumeHigh} onClick={()=> playVerb( verb.partizip )}/></span></td>
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
