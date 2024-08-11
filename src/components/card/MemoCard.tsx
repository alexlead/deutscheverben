import React from 'react';
import { verb } from '../../types/dataTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

export interface IMemoCardProps {
    memoVerb: verb;
    playVerb: () => void;
    answerStatus: boolean;
}

const MemoCard: React.FunctionComponent<IMemoCardProps> = ({ memoVerb, playVerb, answerStatus }) => {
    return (
        <div className="memocard">

            <div className="front text-center text-bg-primary rounded p-5">
                <div className="playcard text-end"><span className='clickable' onClick={() => playVerb()}><FontAwesomeIcon icon={faVolumeHigh} /></span></div>
                <h2 className='title display-1 p-2 mb-5'>{memoVerb?.verb}</h2>
                <div className="description">

                    <div className="container">
                        <div className="row thead fs-6">
                            <div className="col-6">Past</div>
                            <div className="col-6">Partizip II</div>
                        </div>
                        <div className="row display-4">
                            <div className="col-6">{memoVerb?.past}</div>
                            <div className="col-6">{memoVerb?.partizip}</div>
                        </div>
                    </div>
                </div>
            </div>
            {answerStatus &&
                <div className="back text-center text-bg-secondary text-white rounded p-5 mt-3">
                    <h2 className='display-3'>{memoVerb?.translation}</h2>
                </div>
            }

        </div>
    );
}

export default MemoCard;