import {CategoryPreviewContainer, Preview} from './category-preview.styles.jsx'
import ProductCard from '../product-card/product-card.component'
import {Link} from 'react-router-dom'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title} className='title'>{title.toUpperCase()}</Link>
      </h2>
      <Preview>
        {
          products.filter((_, idx) => {
            return idx < 4
          }).map((product) => {
            return <ProductCard key={product.id} product={product}/>
          })
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;