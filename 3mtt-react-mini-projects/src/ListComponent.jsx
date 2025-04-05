import './ListComponent.css'

function ListComponent({items, title, handleDelete}) {
  
    return (
        <div className="items-list">
            <h1>{title}</h1>
            {items.map((item) => (
                <ul className="item-details" key={item.id}>
                    <li><span className='username'>{item.name}</span>
                        <ul>
                            <li><span className='user-detail'>User ID:</span> {item.id}</li>
                            <li><span className='user-detail'>Phone:</span> {item.phone}</li>
                            <li><span className='user-detail'>Email:</span> {item.email}</li>
                            <li><span className='user-detail'>Website:</span> {item.website}</li>
                        </ul>
                        <button className="red-btn" onClick={() => handleDelete(item.id)}>Delete User</button>
                    </li>
                </ul>
            ))}

        </div>
    );
}

export default ListComponent;