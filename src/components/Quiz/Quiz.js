import React, { useState } from 'react';
import './Quiz.css';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const [isCorrect, setIsCorrect] = useState("");
    const [eye, setEye] = useState("");
    const quiz = useLoaderData();
    const { name, questions } = quiz.data;

    const handleExam = (selectItem, selectItem1, s) => {
        if (selectItem === selectItem1) {
            setIsCorrect(`Answere of ${s}, is correct`)
        }
        else {
            setIsCorrect("InCorrect");
        }
    }
    const handleEye = (eye) => {
        setEye(eye);
    }
    return (
        <div>
            <h1>Here Separate Quiz : {name}</h1><h1 className='main'>{isCorrect}</h1> <span className='eye'>{eye}</span>
            {
                questions.map((quiestion, idx) => <div key={quiestion.id}> <h3>{idx + 1}. {quiestion.question}</h3> <button onClick={() => handleEye(quiestion.correctAnswer)}><i className="fas fa-eye-slash"></i></button> <br />
                    <form action="">
                        <p>
                            <label htmlFor={quiestion.options[0]}>
                                <input type="radio" name="name" value={quiestion.options[0]} onClick={() => handleExam(quiestion.correctAnswer, quiestion.options[0], idx + 1)} id="" />{quiestion.options[0]}
                            </label>
                        </p>
                        <br />
                        <p>
                            <label htmlFor={quiestion.options[1]}>
                                <input type="radio" name="name" value={quiestion.options[1]} onClick={() => handleExam(quiestion.correctAnswer, quiestion.options[1], idx + 1)} id="" />{quiestion.options[1]}
                            </label>
                        </p>
                        <br />
                        <p>
                            <label htmlFor={quiestion.options[2]}>
                                <input type="radio" name="name" value={quiestion.options[2]} onClick={() => handleExam(quiestion.correctAnswer, quiestion.options[2], idx + 1)} id="" />{quiestion.options[2]}
                            </label>
                        </p>
                        <br />
                        <p>
                            {quiestion.options[3] ? <label htmlFor={quiestion.options[3]}>
                                <input type="radio" value={quiestion.options[3]} name="name" onClick={() => handleExam(quiestion.correctAnswer, quiestion.options[3], idx + 1)} id="" />{quiestion.options[3]}
                            </label> : false}
                        </p>
                    </form>
                </div>)
            }
        </div >
    );
};

export default Quiz;


// onClick={() => handleExam(quiestion.options[3])}