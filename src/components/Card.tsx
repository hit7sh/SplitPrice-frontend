import React from 'react'

const Card = ({username, balance}:any) => {
    // const username = 'hit7sh@gmail.com';
    // let balance = +1;
    const color = balance < 0 ? "orange" : balance ? "lightgreen" : "lightblue";
    return (
        <>
    <div className='border m-6 border-x-8 rounded-lg' style={{'borderColor':color}}>
        <div className='text-center font-mono font-semibold text-xl text-blue-300 bg-slate-700'>
            {username}
        </div>
        <div className='bg-slate-800' style={{color}}>
        {balance < 0 ? 
        `You owe ${-balance}`:
        balance === 0 ? `You are settled!` :
        `You receive ${balance}`}
        </div>
    </div>
    </>)
}

export default Card