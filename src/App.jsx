import Header from './component/Header/Header'
import Product from './component/Product/Product'
import Shop from './component/Product/Shop'
import { DUMMY_PRODUCTS } from './dummy-products.js'


export default function App(){
  return (
    <>
      <Header/>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </>
  )
}