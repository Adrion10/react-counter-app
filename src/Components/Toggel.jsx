import {useState} from 'react'

const Toggel = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div>
            {toggle && <h1>Learn React </h1>}
            <button onClick ={(setToggle)}>{!toggle ? 'hide' :'show'}</button>
        </div>
    )
}

export default Toggel
