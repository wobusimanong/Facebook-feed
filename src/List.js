import React from 'react';

function List(props) {
    return <div>
        {
            props.list.map((image, index) => {
                return <div className='image' key={index}>
                    <p>{image.title}</p>
                    <img src={image.url}/>
                </div>
            })
        }
    </div>
}

export default List;