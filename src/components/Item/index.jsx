import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {

    const { item, deleteItem, index, updateItem } = props

    return (
        <div className="py-6 px-8 rounded-md shadow-md flex justify-between items-center max-w-2xl mx-auto my-10">
            <div className="flex text-lg">
                <p className="px-1">{index + 1}.</p>
                <p>{item.title}</p>
            </div>
            <div className="flex gap-4 text-2xl">
                <a className="cursor-pointer" onClick={() => updateItem(item.id)}>
                    {item.isAdded === true ? <FontAwesomeIcon className='text-emerald-400 text-2xl' icon={faCheck} /> : <FontAwesomeIcon className='text-red-300 transition duration-700 hover:text-red-400 hover:text-xl' icon={faCartShopping} />}
                </a>
                <a className="cursor-pointer" onClick={() => deleteItem(item.id)}>{<FontAwesomeIcon className='text-red-300 transition duration-700 hover:text-red-400 hover:text-xl' icon={faTrashCan} />}</a>
            </div>
        </div>
    )
}

export default Item