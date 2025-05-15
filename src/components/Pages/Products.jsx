import {Link,useSearchParams} from "react-router-dom";

const Products = ()=>{
    const [searchParams,setSearchParams]= useSearchParams();
    const sortBy = searchParams.get("sortBy");
    const category = searchParams.get("category");
    const handleSortBy = ()=>{
        setSearchParams({
            sortBy:"name",
            category,
        })
    }
    return(
        <div>
            <h2>Products</h2>
            <ul>
                <li>
                    <Link to='/products/1'>Product 1</Link>
                </li>
                <li>
                    <Link to='/products/2'>Product 2</Link>
                </li>
                <li>
                    <Link to='/products/3'>Product 3</Link>
                </li>
            </ul>
            <h3>SortBy:{sortBy} Category:{category}</h3>
            <button onClick={handleSortBy}>sortby-name</button>
        </div>
    )
}

export  default Products;