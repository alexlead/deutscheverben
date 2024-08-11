import React from 'react';
import { verb } from '../../types/dataTypes';
import TestInput from './TestInput';

interface ITestQuestionProps {
    index: number;
    verb: verb;
    checkStatus: boolean;
}

const TestQuestion: React.FunctionComponent<ITestQuestionProps> = ({ index, verb, checkStatus }) => {


    return (
        <tr key={verb.id}>
            <td>{index}</td>
            <td><TestInput word={verb.verb}  checkStatus={checkStatus} /></td>
            <td><TestInput word={verb.past}  checkStatus={checkStatus} /></td>
            <td><TestInput word={verb.partizip}  checkStatus={checkStatus} /></td>
            <td>{verb.translation}</td>
        </tr>
    );
};

export default TestQuestion;
