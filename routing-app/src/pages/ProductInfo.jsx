import { useNavigate, useParams } from "react-router-dom"
import products from "../data/products"

const ProductInfo = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const product = products.find((p) => p.id === Number(id))

    return (
        <section className="product-info">
            <h2>상품 정보</h2>
            <div className="product-details">
                <p>상품 ID: {id}</p>
                <p>상품 이름: {product.name}</p>
                <p>상품 가격: {product.price}</p>
                <p>상품 설명: {product.description}</p>
            </div>
            <div className="btn-list">
                <button onClick={() => {navigate('/products')}}>목록</button>
            </div>
        </section>
    )
}

export default ProductInfo