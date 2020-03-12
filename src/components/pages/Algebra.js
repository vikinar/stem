import React, {useState, useEffect, useRef, Fragment} from 'react'
import Popup from "reactjs-popup";

import '../../sass/pages/algebra.scss'

const historyArr = []
let table = {}
let stateHis = ''
const Obj = (e, arg1Iterable, arg2Iterable) => {
    arg1Iterable = Math.round(Math.random()*10)
    arg2Iterable = Math.round(Math.random()*10)
    let arg1 = arg1Iterable
    let arg2 = arg2Iterable
    historyArr.push(table)
    for(let item of historyArr){
        if (arg1 !== item.arg1 && arg2 !== item.arg2 && arg1 !== 0 && arg2 !== 0){
            table = Object.create({}, {
                arg1: {
                    value: arg1,
                    enumerable: true
                },
                arg2: {
                    value: arg2,
                    enumerable: true
                }
            })
        }
    }
    return table
}

const Sum = () => {
    return table.hasOwnProperty('arg1') || table.hasOwnProperty('arg2') ? table['arg1'] * table['arg2'] : `No Arguments`
}

let time = 0
let s = 1000
let answerArr = []
let findAnswer

Obj()

const Algebra = (props) => {
    let [count, setCount] = useState(60)
    let [openModal, setModal] = useState(true)
    const [answer, setAnswer] = useState('')
    const [handle, setHandle] = useState({value: '', successCount: 0, color: '', state: false, progress: 'rgba(255,255,255, .5)', progressWidth: '2', checkTable: '0'})

    let paused = true

    const update = () => {
        if(count === 0) {
            setHandle({
                successCount: 0
            })
        }
    }

    const up = () => {
        if(count > 0 && openModal === false){
            setCount(count-=1)
        } else if (count === 0) {
            update()
        }
    }

    const init = () => {
        return openModal
    }

    const closeModal = () => {
        paused = false
        return setModal(openModal = false)
    }

    const timer = setTimeout(up, s)

    function usePrevious(value) {
        const ref = useRef(value);
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    let prevCount = usePrevious(handle.successCount)
    const handleAnswer = (e) => {
        e.preventDefault()
        if(answer === Sum().toString()){
            setHandle({
                value: 'Ճիշտ է',
                successCount: prevCount+=1,
                state: true,
                checkTable: '1',
                color: 'green'
            })
            stateHis = answer
            answerArr.push(stateHis)
            findAnswer = answerArr.find(item => item === answer)
            console.log(findAnswer)
            // console.log(answerArr)
            setAnswer('')

            return Obj()
        } else {
            setHandle({
                value: 'Կրկին փորձեք',
                successCount: prevCount,
                state: false,
                checkTable: '0',
                color: 'red'
            })
            // console.log(prevCount)
            setAnswer('')
            return Obj()
        }
    }

    let arr = [1,2,3,4,5,6,7,8,9,10]

    return (
        <main>
            <Popup
                open={openModal}
                closeOnDocumentClick
                onClose={closeModal}
            >
                {close => (
                    <div className="modal">
                        <div className="header">
                            Սովորում ենք բազմապատկում
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                        </div>
                        <div className="content">
                            Այս վարժության մեջ Դուք կսովորեք բազմապատկման աղյուսակը:
                            Շարունակելու համար սեղմեք «Սկսել» կոճակը:
                        </div>
                        <input className="button" type="submit" onClick={closeModal} value="Սկսել"/>
                    </div>
                )}
            </Popup>
            <section className = 'category' style = {{minHeight: '90vh'}}>
                <section className="category__header" style = {{background: props.itemBg, color: props.itemTitle}}>
                    <h1>Բազմապատկում</h1>
                </section>
                <section className="category__content lab">
                    <h2 style = {{margin: '1rem 0'}}> 00 : { count < 10 ? `0${count}` :  count} </h2>
                    <div className= 'lab__table'>
                        {
                            arr.map(( x, i, array) => {
                                return (<div style = {{display: 'flex'}} key = {i}>
                                    {
                                        arr.map((y, index) => {
                                                return (
                                                    <div style = {{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: '100%',
                                                        padding:'.75rem',
                                                        margin: '.25rem',
                                                        background: `${(i === 0 || index === 0) || (x === table['arg1'] && y === table['arg2'] && handle.state) ? 'green' : 'red'}`
                                                    }} key={index}>
                                                                <span style={{opacity: `${(i === 0 || index === 0) || (x === table['arg1'] && y === table['arg2'] && handle.state) ? '1' : '0'}`}}>
                                                                    {x * y}
                                                                </span>
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </div>)
                            })}
                    </div>

                    <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem'}}><span>{table['arg1']} * {table['arg2']} = </span>
                        <span>
                                <form onSubmit={handleAnswer}>
                                    <input className='answer-form' type="text" onChange={(answer) => setAnswer(answer.target.value)} value={answer} placeholder=''/>
                                </form>
                            </span>
                    </div>
                    <input className="button" style = {{width: '80%', padding: '1rem', margin: '1rem 0', background: 'blue'}} onClick={handleAnswer} type="submit" value="Ստուգել"/>
                    <h2 style = {{color: handle.color, margin: '1rem 0'}}>{handle.value}</h2>
                    <div style = {{marginBottom: '1rem'}}>Ձեր առաջընթացը՝ {handle.successCount * Math.round(100/36)}%</div>
                    <div style = {{ position: 'relative', width: '80%', height: '1rem', background: `${handle.progress}`}}>
                        <span style = {{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${handle.successCount * Math.round(100/36)}%`, background: handle.color}}></span>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Algebra
