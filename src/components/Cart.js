import '../styles/Cart.css';

function Cart() {
	const monsterraPrice = 8;
	const lierrePrice = 10;
	const bouquetPrice = 15;
  
	return (
	  <div className="lmj-cart">
		<h2>Panier</h2>
		<ul>
		  <li>Monstera : {monsterraPrice} €</li>
		  <li>Lierre : {lierrePrice} €</li>
		  <li>Bouquet de fleurs : {bouquetPrice} €</li>
		</ul>
		<div>Total du panier = {monsterraPrice + lierrePrice + bouquetPrice} €</div>
	  </div>
	);
  }

  export default Cart;