import React, { useState } from 'react';
import verben from '../data/verbs.json';
import { Col, Container, Row } from 'react-bootstrap';
import { verb } from '../types/dataTypes';
import CommonFilters from '../components/common/CommonFilters';

interface ITestViewProps {
}

const TestView: React.FunctionComponent<ITestViewProps> = (props) => {

    const dataList: verb[] = verben as verb[];
    const [verbenList, setVerbenList] = useState<verb[]>([]);
    const [filterLevels, setFilterLevels ] = useState<string[]>([])


    const updateFilterLevels = (levelsList: string[]): void => {
        setFilterLevels(levelsList)
    }

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
    </Container>
  );
};

export default TestView;
