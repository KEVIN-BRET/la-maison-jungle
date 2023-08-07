import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css'

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={`${category}`}>{category}</li>
        ))}
      </ul>
      <ul>
        {plantList.map((plant) => (
          <li key={`${plant.id}`}>{plant.name}
          {plant.isBestSale && <span>🔥</span>}
          {plant.isSpecialOffer && <span className='lmj-sales'> (EN SOLDE)</span>}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
