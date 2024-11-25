import React from 'react'

const wallet = () => {
  return (
    <div>
        <div>
            <h1>wallet</h1>
        </div>
    
        <div>
        <button onClick={() => setBalance(300)}>300</button>
        <button onClick={() => setBalance(500)}>300</button>
        <button onClick={() => setBalance(1000)}>300</button>
        <button>deposit</button>
        <button>button</button>
    </div>
    </div>
  )
}

export default wallet