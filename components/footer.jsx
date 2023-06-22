import React from 'react';


const Footer = () => {

    const hour = new Date().getHours();
    const open = 9
    const close = 22
    const isOpen = hour >= open && hour <= close
    
    return (<>
        <footer className='footer'>
            {isOpen ? (
                <Order hour={hour} open={open} close={close} isOpen={isOpen}/>
            ): (<p className = 'footer'>we're happy to welcome you between {open}:00 pm until {close}:00 pm
            
        </p>
        )
    }
    </footer >
    </>
    )

}

function Order(z) {
    const openTime = () => {
        if (z.isOpen) {
            return "open"
        } else {
            return "close"
        }
    }
    return (<>
        <div className='order'>
            <p>we,re open at {z.open}:00 pm and close at {z.close}:00 pm</p>
            <p>we're {openTime()} right now</p>
            <button className='btn'>order</button>
        </div>

    </>
    )
}

export default Footer