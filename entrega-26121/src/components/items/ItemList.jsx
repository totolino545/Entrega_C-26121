import Item from "./Item"

const ItemList = ({productos}) => {
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Mis Productos</h1>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">  
      {productos.map(prod => 
        
          <Item key={prod.id} {...prod} />
        
      )}
      </div>
      </div>
    </div>
  )
}

export default ItemList