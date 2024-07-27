import React, { useEffect, useState } from 'react';
import verben from '../data/verbs.json';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { verb } from '../types/dataTypes';
import CommonFilters from '../components/common/CommonFilters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faListCheck } from '@fortawesome/free-solid-svg-icons';
import TestQuestion from '../components/test/TestQuestion';

interface ITestViewProps {
}

const TestView: React.FunctionComponent<ITestViewProps> = (props) => {

    const dataList: verb[] = verben as verb[];
    const [verbenList, setVerbenList] = useState<verb[]>([]);
    const [filterLevels, setFilterLevels] = useState<string[]>([])
    const [qtyQuestions, setQtyQuestions] = useState<number>(10)
    const [checkStatus, setCheckStatus ] = useState<boolean>(false)


    const updateFilterLevels = (levelsList: string[]): void => {
        setFilterLevels(levelsList)
    }

    const toggleQtyQuestions = () => {
        if ( qtyQuestions === 10 ) {
            setQtyQuestions(0)
        } else {
            setQtyQuestions(10)
        }
    }

    const checkUsersAnswers = () => {
        setCheckStatus(true)
    }

    const updateVerbenList = () => {
        setCheckStatus(false)
        setVerbenList( [ ...shuffleVerbenList(verbenList)] );
    }   

    const shuffleVerbenList = (array: verb[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        let verbList = [...dataList]

        if (filterLevels.length) {
            verbList = [...verbList.filter((item) => filterLevels.includes(item.level))]
        }

        verbList = [ ...shuffleVerbenList(verbList) ]

        if( qtyQuestions ) {
            verbList = [ ...verbList.slice(0, qtyQuestions ) ]
        }
        
        setCheckStatus(false)

        setVerbenList( verbList );
    }, [filterLevels, qtyQuestions])


    return (
        <Container className='mt-4'>
            <Row className='mt-4 mb-4'>
                <Col>
                    <h1 className='text-center'>Проверь себя!</h1>
                </Col>
            </Row>
            <Row className='mt-4 mb-4'>
                <Col>
                    <CommonFilters filterLevels={filterLevels} updateFilterLevels={updateFilterLevels} />
                </Col>
            </Row>
            <Row className='mt-4 mb-4'>
                <Col>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-primary" onClick={updateVerbenList}><FontAwesomeIcon icon={faArrowsRotate} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={toggleQtyQuestions}><span className='h6'>{ qtyQuestions === 10 ? <>10</> : <>all</>}</span></button>
                        <button type="button" className="btn btn-outline-primary" onClick={checkUsersAnswers}><FontAwesomeIcon icon={faListCheck} /></button>
       
                    </div>
                </Col>
            </Row>
            <Row className='mt-4 mb-4'>
                <Col>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Verb</th>
                                <th>Präterium</th>
                                <th>Partizip II</th>
                                <th>Перевод</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                verbenList.map((verb, i) =>
                                    (
                                        <TestQuestion  index={ i+1 } verb={ verb} checkStatus={ checkStatus } />
                                    ) 
                                
                                )
                            }
                        </tbody>
                    </Table>


                </Col>
            </Row>

            <Row className='mt-4 mb-4'>
                <Col className='text-end'>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-primary" onClick={checkUsersAnswers}><FontAwesomeIcon icon={faListCheck} /> Проверить ответы</button>
                        <button type="button" className="btn btn-outline-primary" onClick={updateVerbenList}><FontAwesomeIcon icon={faArrowsRotate} /> Новый тест</button>
       
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TestView;
