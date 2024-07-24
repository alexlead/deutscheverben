import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import verben from '../data/verbs.json';
import { verb } from '../types/dataTypes';
import { Col, Container, Form, Row } from 'react-bootstrap';
import CommonFilters from '../components/common/CommonFilters';
import { playText } from '../helpers/playText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpAZ, faBackward, faBackwardFast, faEye, faEyeSlash, faForward, faForwardFast, faPlay, faShuffle, faStop, faVolumeHigh, faVolumeOff, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

interface IMemoViewProps {
}

const MemoView: React.FunctionComponent<IMemoViewProps> = (props) => {
    const dataList: verb[] = verben as verb[];
    const [verbenList, setVerbenList] = useState<verb[]>([]);
    const [currentCardId, setCurrentCardId] = useState<number>(0);
    const [ playStatus , setPlayStatus ] = useState<boolean>(false)
    const [ voiceStatus , setVoiceStatus ] = useState<boolean>(false)
    const [ orderingStatus , setOrderingStatus ] = useState<boolean>(false)
    const [ answerStatus , setAnswerStatus ] = useState<boolean>(true)

    const [filterLevels, setFilterLevels] = useState<string[]>([])

    const updateFilterLevels = (levelsList: string[]): void => {
        setFilterLevels(levelsList)
    }

    const getFirstCard = (): void => {
        setCurrentCardId( 0 )
    }

    const getLastCard = (): void => {
        setCurrentCardId( verbenList.length - 1 )
        setPlayStatus(false)
    }

    const getNextCard = (): void => {
        
        if ( orderingStatus ) { 
            getShuffledCard();
        } else if ( (currentCardId + 1) < verbenList.length ) {
            setCurrentCardId( currentCardId + 1 )
        } else {
            setPlayStatus(false)
        }
    }

    const getPreviousCard = (): void => {

         if ( currentCardId > 0 ) {
            setCurrentCardId( currentCardId - 1 )
        }
    }

    const getShuffledCard = () : void => {
        setCurrentCardId ( Math.floor(Math.random() * verbenList.length) )
    }

    const togglePlayStatus = ():void => {
        setPlayStatus ( !playStatus )
    }
    const toggleVoiceStatus = ():void => {
        setVoiceStatus ( !voiceStatus )
    }
    const toggleOrderingStatus = ():void => {
        setOrderingStatus ( !orderingStatus )
    }
    const toggleAnswerStatus = ():void => {
        setAnswerStatus ( !answerStatus )
    }

    useEffect(() => {
        let verbList = [...dataList]

        if (filterLevels.length) {
            verbList = [...verbList.filter((item) => filterLevels.includes(item.level))]
        }

        setCurrentCardId(0);
        setVerbenList(verbList);
    }, [filterLevels])

    useEffect( () => {

        if( voiceStatus ) {
            playVerb();
        }

        if( playStatus ) {
           
                setTimeout(  getNextCard, 5000 );
        }

    }, [currentCardId, playStatus ])

    const playVerb = () => {
        playText( verbenList[currentCardId]?.verb + "... " + verbenList[currentCardId]?.past + "... " + verbenList[currentCardId]?.partizip , "de-DE");
    }



    return (
        <Container className='mt-4'>
            <Row className='mt-4 mb-4'>
                <Col>
                    <h1 className='text-center'>DIE UNREGELMÄSSIGEN VERBEN</h1>
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
                        <button type="button" className="btn btn-outline-primary" onClick={togglePlayStatus}><FontAwesomeIcon icon={ playStatus ? faStop : faPlay } /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={getFirstCard}><FontAwesomeIcon icon={faBackwardFast} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={getPreviousCard}><FontAwesomeIcon icon={faBackward} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={getNextCard}><FontAwesomeIcon icon={faForward} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={getLastCard}><FontAwesomeIcon icon={faForwardFast} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={toggleAnswerStatus}><FontAwesomeIcon icon={ answerStatus ? faEye : faEyeSlash } /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={toggleOrderingStatus}><FontAwesomeIcon icon={orderingStatus ? faShuffle : faArrowUpAZ} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={toggleVoiceStatus}><FontAwesomeIcon icon={voiceStatus ? faVolumeHigh : faVolumeXmark} /></button>
                    </div>
                </Col>
            </Row>


            <Row className='mt-4 mb-4'>
                <Col>
                    <div className="memocard">

                        <div className="front text-center text-bg-primary rounded p-5">
                            <div className="playcard text-end"><span className='clickable' onClick={() => playVerb()}><FontAwesomeIcon icon={faVolumeHigh} /></span></div>
                            <h2 className='title display-1 p-2 mb-5'>{verbenList[currentCardId]?.verb}</h2>
                            <div className="description">

                                <div className="container">
                                    <div className="row thead fs-6">
                                        <div className="col-6">Past</div>
                                        <div className="col-6">Partizip II</div>
                                    </div>
                                    <div className="row display-4">
                                        <div className="col-6">{verbenList[currentCardId]?.past}</div>
                                        <div className="col-6">{verbenList[currentCardId]?.partizip}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { answerStatus && 
                        <div className="back text-center text-bg-secondary text-white rounded p-5 mt-3">
                            <h2 className='display-3'>{verbenList[currentCardId]?.translation}</h2>
                        </div>
                        }

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MemoView;
