export default function Addnewproduct(){
    return(
        <>
        <h1>Add New Product</h1>

        <div>
            <input type="text" placeholder="Product Name"/>
            <input type="text" placeholder="Price"/>
            <label htmlFor="">Select Category</label>
            <select name="" id=""></select>

            <input type="file" placeholder="Upload Prodect Image"/>
            <input type="text" placeholder="Detailed Product Description"/>
            <button>Add Product</button>
        </div>
        </>
    )
}