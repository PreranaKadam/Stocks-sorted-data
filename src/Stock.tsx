import { useState } from "react";
import data from './json/data.json';
import downArrow from './images/down-arrow.png';
import upArrow from './images/up-arrow.png'

const Stock = () => {

    const [users, setUsers] = useState(data);
    const [showOptions, setShowoptions] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');

    const sortByName = () => {
        const sortedData = [...users].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.cname.localeCompare(b.cname);
            } else {
                return b.cname.localeCompare(a.cname);
            }
        })
        setUsers(sortedData);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };
    const sortByPrice = () => {
        const sortedData = [...users].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.ltp - b.ltp;
            } else {
                return b.ltp - a.ltp;
            }
        });

        setUsers(sortedData);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle the sort order
    };

    return (
        <>
            <button className="sort-btn" onClick={() => { setShowoptions(true) }}>Sort data</button><br /><br />
            {showOptions && <div>
                <button onClick={sortByName}> {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</button>&nbsp;&nbsp;&nbsp;
                <button onClick={sortByPrice}> Price {sortOrder === 'asc' ? <img src={downArrow} /> : <img src={upArrow} />}</button>
            </div>}<br></br>
            <div className="main-container">
                {users?.map((user: any, index: any) => (
                    <div className='container-1'>
                        <img src={user.pic} className='userpicture'/>&nbsp;&nbsp;&nbsp;{user.cname}<br />
                        <p className="price-div"/>{user.ltp}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Stock;
