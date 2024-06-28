import { useDispatch } from "react-redux"
import { itemsAdded, itemsDeleted } from "../reducers/cartSlice"
import { toast } from "react-toastify"

function ProductCard(props){
    console.log(props.product)
    const {title,description,price,image}=props.product || {}
    const dispatch=useDispatch()
    function addItems(){
        dispatch(itemsAdded(props.product))
        toast.success(title + " was Added to cart")
       
    }
    // function deleteItems() {
    //     dispatch(itemsDeleted(id)); // Ensure your itemsDeleted reducer is set to handle an ID
    // }
   
    return(
        <>
        <div className="product-card">
            <img src={image} />
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="price">${price}</div>
            <button className="add-cart" onClick={addItems}>Add To Cart</button>
            {/* <button onClick={deleteItems}>Remove from Cart</button> */}
        </div>
        </>
    )
}

export default ProductCard