import React, { useState } from 'react'
import { ListItems, Sform } from '../../Components/Components'

const ShoppingList = () => {

  const [lists, setLists] = useState([])

  const addItem = (list)=>{
    setLists(prevState => [
      ...prevState, list
    ]);
    //console.log(list)
  }

  const deleteItem = (id) => {
    setLists((prevList) => prevList.filter((item) => item.id !== id))
  }

  return (
    <div className=' w-full h-full pb-5' >
      <div className="w-full px-5 top-0 z-10 h-10 sticky bg-secondary text-white flex items-center ">
        <h1 className=" w-fit font-semibold text-lg "> Shopping List :</h1>
      </div>
      <div className="mx-0 h-full overflow-clip pb-5 relative px-2.5">
        <Sform addItem={addItem} className={`sticky top-0`} />
        <div className="mt-5 h-[240px] text-xl overflow-y-scroll">
          {lists && < ListItems lists={lists} onClick={deleteItem} key={lists.id} />} 
        </div>
      </div>
    </div>
  )
}

export default ShoppingList