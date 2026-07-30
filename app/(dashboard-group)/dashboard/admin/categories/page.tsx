import React from 'react'
import { getAllCategories } from '../../_action/getAllCategories';
import CategoryCards from '../_components/CategoryCards';

const CategoriCreatepage = async () => {
    const res = await getAllCategories();

  return (
    <div>
        <CategoryCards
            categories={res.data.categories}
        />
    </div>
  )
}

export default CategoriCreatepage
