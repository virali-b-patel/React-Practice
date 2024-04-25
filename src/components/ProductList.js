import React from 'react'
import { useFilterContext } from './context/FilterContext'

const ProductList = () => {

  const { filter_products, setGridView } = useFilterContext()

  if (setGridView === true) {
    return <GridView products={filter_products} />
  }
  //  else {
  //   return <ListView products={filter_products} />
  // }
}

export default ProductList