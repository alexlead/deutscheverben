import React, { useEffect, useState } from 'react';
import { verb } from '../types/dataTypes';
import { Col, Container, Row } from 'react-bootstrap';
import CommonFilters from '../components/common/CommonFilters';
import { playText } from '../helpers/playText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpAZ, faBackward, faBackwardFast, faEye, faEyeSlash, faForward, faForwardFast, faPlay, faShuffle, faStop, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectLevels } from '../store/slices/levelFiltersSlice';
import { selectUserList } from '../store/slices/userListSlice';
import { selectVerben } from '../store/slices/verbenSlice';
import MemoCard from '../components/card/MemoCard';

interface IMemoViewProps {
}

const MemoView: React.FunctionComponent<IMemoViewProps> = () => {
    const dataList = useSelector(selectVerben).verbList;
    const [verbenList, setVerbenList] = useState<verb[]>([]);
    const [currentCardId, setCurrentCardId] = useState<number>(0);
    const [playStatus, setPlayStatus] = useState<boolean>(false)
    const [voiceStatus, setVoiceStatus] = useState<boolean>(false)
    const [orderingStatus, setOrderingStatus] = useState<boolean>(false)
    const [answerStatus, setAnswerStatus] = useState<boolean>(true)

    const reduxFiltersData = useSelector(selectLevels);
    const reduxUserListsData = useSelector(selectUserList);

    const getFirstCard = (): void => {
        setCurrentCardId(0)
    }

    const getLastCard = (): void => {
        setCurrentCardId(verbenList.length - 1)
        setPlayStatus(false)
    }

    const getNextCard = (): void => {

        if (orderingStatus) {
            getShuffledCard();
        } else if ((currentCardId + 1) < verbenList.length) {
            setCurrentCardId(currentCardId + 1)
        } else {
            setPlayStatus(false)
        }
    }

    const getPreviousCard = (): void => {

        if (currentCardId > 0) {
            setCurrentCardId(currentCardId - 1)
        }
    }

    const getShuffledCard = (): void => {

        setCurrentCardId(Math.floor(Math.random() * verbenList.length))
    }

    const togglePlayStatus = (): void => {
        setPlayStatus(!playStatus)
    }
    const toggleVoiceStatus = (): void => {
        setVoiceStatus(!voiceStatus)
    }
    const toggleOrderingStatus = (): void => {
        setOrderingStatus(!orderingStatus)
    }
    const toggleAnswerStatus = (): void => {
        setAnswerStatus(!answerStatus)
    }

    useEffect(() => {
        let verbList = [...dataList]

        if (reduxFiltersData.filterMyList) {
            verbList = [...verbList.filter((item) => reduxUserListsData.userVerbenList.includes(item.id))]
        } else {
            if (reduxFiltersData.filterLevelsArray.length) {
                verbList = [...verbList.filter((item) => reduxFiltersData.filterLevelsArray.includes(item.level))]
            }
        }

        setCurrentCardId(0);
        setVerbenList(verbList);
    }, [reduxFiltersData.filterLevelsArray, reduxFiltersData.filterMyList])

    useEffect(() => {

        if (voiceStatus) {
            playVerb();
        }

        if (playStatus) {

            setTimeout(getNextCard, 10000);
        }

    }, [currentCardId, playStatus])

    const playVerb = () => {
        if (answerStatus) {
            playText(verbenList[currentCardId]?.translation + ".", "ru-RU");
        }
        playText(verbenList[currentCardId]?.verb + "... " + verbenList[currentCardId]?.past + "... " + verbenList[currentCardId]?.partizip, "de-DE");
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
                    <CommonFilters />
                </Col>
            </Row>
            <Row className='mt-4 mb-4'>
                <Col>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-primary" onClick={togglePlayStatus}><FontAwesomeIcon icon={playStatus ? faStop : faPlay} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={getFirstCard}><FontAwesomeIcon icon={faBackwardFast} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={getPreviousCard}><FontAwesomeIcon icon={faBackward} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={getNextCard}><FontAwesomeIcon icon={faForward} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={getLastCard}><FontAwesomeIcon icon={faForwardFast} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={toggleAnswerStatus}><FontAwesomeIcon icon={answerStatus ? faEye : faEyeSlash} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={toggleOrderingStatus}><FontAwesomeIcon icon={orderingStatus ? faShuffle : faArrowUpAZ} /></button>
                        <button type="button" className="btn btn-outline-primary" onClick={toggleVoiceStatus}><FontAwesomeIcon icon={voiceStatus ? faVolumeHigh : faVolumeXmark} /></button>
                    </div>
                </Col>
            </Row>
            <Row className='mt-4 mb-4'>
                <Col>
                    {verbenList.length > 0 ?
                        <MemoCard memoVerb={verbenList[currentCardId]} playVerb={playVerb} answerStatus={answerStatus} />
                        :
                        <div className="text-center text-primary mb-3 h1">Список пуст!</div>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default MemoView;
