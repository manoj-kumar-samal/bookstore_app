

export default function Cards({item}){
    return(
        <div className="my-4 p-3">
            <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-200">
                <figure>
                    <img
                    src={item.image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions flex justify-between">
                    <div className="badge badge-outline bg-gray-100">${item.price}</div>
                    <div className="badge badge-outline bg-gray-100 hover:bg-pink-500 hover:text-white cursor-pointer">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}