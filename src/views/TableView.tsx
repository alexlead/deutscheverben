import React, { useEffect, useState } from 'react';
import { verb } from '../types/dataTypes';
import { Col, Container, Row } from 'react-bootstrap';
import CommonFilters from '../components/common/CommonFilters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { playText } from '../helpers/playText';
import { useDispatch, useSelector } from 'react-redux';
import { selectLevels } from '../store/slices/levelFiltersSlice';
import { addVerbId, removeVerbId, selectUserList } from '../store/slices/userListSlice';
import { selectVerben } from '../store/slices/verbenSlice';
interface ITableViewProps {
}



const TableView: React.FunctionComponent<ITableViewProps> = () => {

    const dataList = useSelector(selectVerben).verbList;
    const [verbenList, setVerbenList] = useState<verb[]>([]);

    const dispatch = useDispatch();
    const reduxFiltersData = useSelector(selectLevels);
    const reduxUserListsData = useSelector(selectUserList);

    const [filterVerb, setFilterVerb] = useState<string>("");
    const [filterPast, setFilterPast] = useState<string>("");
    const [filterPartizip, setFilterPartizip] = useState<string>("");
    const [filterTranslate, setFilterTranslate] = useState<string>("");

    const [userList, setUserList] = useState<string[]>([])


    const userListItems = (itemId: string) => {

        if (userList.includes(itemId)) {
            const index = userList.indexOf(itemId)
            userList.splice(index, 1)
            dispatch(removeVerbId(itemId))
            setUserList([...userList])
        } else {
            dispatch(addVerbId(itemId))
            setUserList([...userList, itemId])
        }
    }

    const isItemInUserList = (itemId: string) => {
        return (userList.includes(itemId));
    }

    useEffect(() => {
        setUserList([...reduxUserListsData.userVerbenList])
    }, [])


    const playVerb = (verb: string) => {
        playText(verb, "de-DE");
    }

    useEffect(() => {
        let verbList = [...dataList]

        if (reduxFiltersData.filterMyList) {
            verbList = [...verbList.filter((item) => reduxUserListsData.userVerbenList.includes(item.id))]
        } else {
            if (reduxFiltersData.filterLevelsArray.length) {
                verbList = [...verbList.filter((item) => reduxFiltersData.filterLevelsArray.includes(item.level))]
            }

            if (filterVerb.length) {
                verbList = [...verbList.filter((item) => item.verb.includes(filterVerb))]
            }
            if (filterPast.length) {
                verbList = [...verbList.filter((item) => item.past.includes(filterPast))]
            }
            if (filterPartizip.length) {
                verbList = [...verbList.filter((item) => item.partizip.includes(filterPartizip))]
            }
            if (filterTranslate.length) {
                verbList = [...verbList.filter((item) => item.translation.includes(filterTranslate))]
            }
        }

        setVerbenList(verbList);
    }, [filterVerb, filterPast, filterPartizip, filterTranslate, reduxFiltersData.filterLevelsArray, reduxFiltersData.filterMyList])





    return (<>
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
            <Row>
                <Col>
                    <div className="table-responsive-md">
                        <table className='table table-striped table-bordered table-hover'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Verb</th>
                                    <th>Präterium</th>
                                    <th>Partizip II</th>
                                    <th>Перевод</th>
                                    <th>Level</th>
                                    <th>My list</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th><input type="text" onChange={(e) => setFilterVerb(e.target.value)} value={filterVerb} /></th>
                                    <th><input type="text" onChange={(e) => setFilterPast(e.target.value)} value={filterPast} /></th>
                                    <th><input type="text" onChange={(e) => setFilterPartizip(e.target.value)} value={filterPartizip} /></th>
                                    <th><input type="text" onChange={(e) => setFilterTranslate(e.target.value)} value={filterTranslate} /></th>
                                    <th></th>
                                    <th></th>
                                </tr>

                                {verbenList.length > 0 ?
                                    verbenList.map((verb, i) => <tr key={verb.id}>
                                        <td>{i + 1}</td>
                                        <td>{verb.verb} &nbsp;&nbsp;&nbsp;&nbsp;<span className='clickable'><FontAwesomeIcon icon={faVolumeHigh} onClick={() => playVerb(verb.verb)} /></span></td>
                                        <td>{verb.past} &nbsp;&nbsp;&nbsp;&nbsp;<span className='clickable'><FontAwesomeIcon icon={faVolumeHigh} onClick={() => playVerb(verb.past)} /></span></td>
                                        <td>{verb.partizip} &nbsp;&nbsp;&nbsp;&nbsp;<span className='clickable'><FontAwesomeIcon icon={faVolumeHigh} onClick={() => playVerb(verb.partizip)} /></span></td>
                                        <td>{verb.translation}</td>
                                        <td>{verb.level}</td>
                                        <td><button className="btn btn-primary" onClick={() => userListItems(verb.id.toString())}><FontAwesomeIcon icon={isItemInUserList(verb.id.toString()) ? faMinus : faPlus} /></button></td>
                                    </tr>)
                                    :
                                    <tr>
                                        <td colSpan={7}><div className="text-center text-primary mb-3 h1">Список пуст!</div></td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </Col>

            </Row>
        </Container>
    </>);
};

export default TableView;
