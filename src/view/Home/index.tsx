import React, {useState, useEffect} from 'react';

import Cart from '../../assets/cart.png'

import { Container } from './style';

import api from '../../services/api';

interface IProduct{
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

interface Test {
    cart:IProduct[]
}

const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<IProduct[]>([]);
    
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    useEffect(() => {
        localStorage.setItem(`@cart`, JSON.stringify(cart));
    }, [cart]);

    const handleCart = (index: number) => {
        let product = data[index]
        setCart(cart => [...cart,product]);
    }

  return (
      <Container>
          <div className="nav">
              <div>
                  <img src="https://cdn.dooca.store/2135/files/logo-nova-free-08.png?v=1611682841&webp=0" alt="HC" width="100px" height="auto" />
              </div>              
              <div>
                  <img src="https://uploads-ssl.webflow.com/5f2d50967d364984a023dc4c/6092fbd604ec859b1408756c_logo-hc.png" alt="HC" width="200px" height="auto" />
              </div>
              <div>
                  <img src="https://assets.website-files.com/5ff79f3ebebf6b12f6b7747f/5ffe04fc6284b7e90070d985_logo-gama-academy.png" alt="Gama" width="200px" height="auto" />
              </div>
              <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/400px-VTEX_Logo.svg.png" alt="Vtex" width="200px" height="auto" />
              </div>
              <div className="cart">
                  <img src={Cart} alt="shopcart" width="50px" height="auto" />
                  <span> ( {cart.length} ) - Itens </span>
              </div>
          </div>
          <div className="bloco">
              <h1> PET SHOP ANIMALIA </h1>
          </div>
          <div className="bloco2">
              <h2> PRODUTOS DE QUALIDADE! </h2>
          </div>
          <section>
              {data.map(( prod, index) => (
                <div className="product-content" key={prod.id}>
                  <img src= {prod.photo} alt="Casinha de madeira" width="200" height="auto" />
                  <h4> {prod.name}</h4>
                  <span> {prod.description} </span>
                  <h6> {prod.price} </h6>
                  <button onClick={ () => handleCart(index)}> Adicionar ao carrinho </button>
              </div>
              ))}              
          </section>
          <div className="foot">
              <h4>Desenvolvido por Maynara Nachbar</h4>
          </div>
      </Container>
  );
}

export default Home;
