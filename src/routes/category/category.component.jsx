import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux/es/exports';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { selectCategoriesIsLoading } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';

import {CategoryContainer,
  CategoryTitle} from './category.styles'

const Category = () => {
  const {category} = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);  
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <>  
      <CategoryTitle>{category}</CategoryTitle>
      {
        isLoading ? <Spinner/> : ( <CategoryContainer>
        {products && 
          products.map((product) => {
            return <ProductCard key={product.id} title={product.title} product={product}/>
          })
        }
      </CategoryContainer>)
      }
    </>
  )
}

export default Category;