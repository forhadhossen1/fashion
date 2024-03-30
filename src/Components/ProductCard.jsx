
const ProductCard = ({ product }) => {
    const { image, offerpercentage, price, offerPrice, title } = product || {}
    return (
        <div>
            <section className="mx-auto w-fit p-12">
                {/* <!-- Card --> */}
                <div className="w-72 h-fit group">
                    <div className="relative overflow-hidden">
                        <img className="h-96 w-full object-cover" src={image} alt="product image" />
                        <div className="absolute bg-white mt-0 p-2">{offerpercentage}%</div>
                        <div className="flex">
                            <div className="absolute left-0 bottom-0 bg-black/20 flex items-center justify-center group-hover:opacity-100 transition-all duration-300">
                                <button className="bg-black text-white py-2 px-5">Add to cart</button>
                            </div>
                            <div className="absolute right-0 bottom-0 bg-black/20 flex items-center justify-center group-hover:opacity-100 transition-all duration-300">
                                <button className="bg-black text-white py-2 px-5">Add to favourite</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <h2 className="mt-3 text-xl capitalize">{title}</h2>
                    <del className="text-red-700 text-lg">${price}</del>
                    <p className="text-xl mt-2 ml-1 inline-block">${offerPrice}</p>
            </section>
        </div>
    );
};

export default ProductCard;