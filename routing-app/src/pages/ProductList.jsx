import products from "../data/products"
import { Link } from "react-router-dom"

const ProductList = () => {
    return (
        <div>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>
                                <Link to={`/products/${product.id}`}>{product.name}</Link>
                            </td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/add-product">상품 등록</Link>
        </div>
    )
}
export default ProductList