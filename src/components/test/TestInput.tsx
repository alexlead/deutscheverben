import React, { useEffect, useState } from 'react';

interface ITestInputProps {
    word: string;
    checkStatus: boolean;
}

const TestInput: React.FunctionComponent<ITestInputProps> = ({ word, checkStatus }) => {

    const [answeredWord, setAnsweredWord] = useState<string>("");
    const [inputBorderClass, setInputBorderClass ] = useState<string>("border border-primary")

    const compareAnswer = () : boolean => {

        const usersAnswer = answeredWord.toLowerCase().trim().replace("  ", " ")
        // case one correct answer
        if ( word.toLowerCase().trim() === usersAnswer ) {
            return true;
        }

        // case two correct answer 
        if ( word.toLowerCase().includes('ist/hat') ) {

            let answer = word.toLowerCase().trim().split(" ")[1]


            if ( ('ist ' + answer  ) === usersAnswer || ('hat ' + answer  ) === usersAnswer || ('hat/ist ' + answer  ) === usersAnswer ) {
                return true;
            } else {
                return false;
            }

        }
        
        if ( word.includes('/') ) { 
            word.toLowerCase().trim().split("/").forEach( item => {
                if ( item === usersAnswer ) {
                    return true;
                }
            })

        }

        return false;
    }

    useEffect( () => {

        setInputBorderClass ("border border-primary")

        if ( checkStatus ) {
            if ( compareAnswer() ) {
                setInputBorderClass ("border border-success")
            } else {
                setInputBorderClass ("border border-danger")
            }
        } else {
            setAnsweredWord( '' )
        }
        
    }, [checkStatus])

  return (
    <>
    <input type='text' value={answeredWord} onChange={(e)=> setAnsweredWord(e.target.value)} disabled={ checkStatus ? true : false} className={ inputBorderClass } />
    { checkStatus && 
        <>
            <br/>
            <span className={''}>{word}</span>
        </>
    }
    </>
  );
};

export default TestInput;
