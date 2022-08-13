import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import {CategoryContainer,
  CategoryTitle} from './category.styles'

const Category = () => {
  const {category} = useParams();
  const {categoriesMap} = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category]);  

  const calculateTitle = (category) => {
    const notFound = "Can't find page you are looking for";
    for (const categories in categoriesMap) {
      if (category.toLowerCase() === categories) {
        return categories;
      }
    }
    return notFound;
  }

  const calculateTitleHandler = () => calculateTitle(category);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <>
    <CategoryTitle>{calculateTitleHandler()}</CategoryTitle>
    <CategoryContainer>
      {products && 
        products.map((product) => {
          return <ProductCard key={product.id} title={product.title} product={product}/>
        })
      }
    </CategoryContainer>
    </>
  )
}

export default Category;