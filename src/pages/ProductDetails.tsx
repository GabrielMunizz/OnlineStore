import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import useIndex from '../hooks/useIndex';
import useFetch from '../hooks/useFetch';
import { Button } from '../styles/Button.style';
import addToCart from '../redux/actions/addToCart';
import { getMercadoPago } from '../utils/getters';
import { FetchedProductDetailsType } from '../utils/types';

import ProductReviews from '../components/ProductReviews/ProductReviews';
import DefaultHeader from '../components/ProductDetailsHeaders/DefaultHeader';
import * as S from '../styles/ProductDetails.style';
import { Header } from '../styles/Header.style';
import PDMobileHeader from '../components/ProductDetailsHeaders/PDMobileHeader';

function ProductDetails() {
  const { id } = useParams();
  const PRODUCT_URL = `https://api.mercadolibre.com/items/${id}`;
  const { data, error, isLoading } = useFetch(PRODUCT_URL);
  const product: FetchedProductDetailsType = data;

  const { handleNext, handlePrevious, index } = useIndex(product?.pictures);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!product) {
    return null;
  }

  const {
    title,
    price,
    pictures,
    accepts_mercadopago: mercadoPago,
    warranty,
  } = product;

  const formattedPrice = price
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const isMercadoPago = getMercadoPago(mercadoPago);

  return (
    <S.ProductDetailsContainer>
      <Header>
        <DefaultHeader />
        <PDMobileHeader />
      </Header>
      {!isLoading && error && <p>Um erro inesperado ocorreu...</p>}
      {!isLoading && product && (
        <S.ProductDetails>
          <h3 aria-label="title" className="title">{title}</h3>
          <section className="infoContent">
            <div className="picturesContainer">
              <button
                aria-label="previousPictureBtn"
                onClick={ handlePrevious }
                className="prevBtn"
              >
                <GrFormPrevious />
              </button>
              <img
                aria-label="productImage"
                src={ pictures[index].url }
                alt="imagem do produto"
              />
              <button
                aria-label="nextPictureBtn"
                onClick={ handleNext }
                className="nextBtn"
              >
                <GrFormNext />
              </button>
            </div>
            <S.InfoAndBtns>
              <h2>Informações do produto:</h2>
              <p>{`Preço: ${formattedPrice}`}</p>
              <p aria-label="mercadoPagoP">
                {`Mercado pago: ${isMercadoPago}`}
              </p>
              <p>{warranty}</p>
              <p>{`Imagens do produto: ${pictures.length}`}</p>
              <div className="btnsContainer">
                <Button
                  aria-label="addToCartBtn"
                  className="addToCartBtn"
                  onClick={ () => dispatch(addToCart(data)) }
                >
                  Adicionar ao carrinho
                </Button>
                <Button
                  aria-label="backToHomeBtn"
                  className="homeBtn"
                  onClick={ () => navigate('/') }
                >
                  Voltar a página principal
                </Button>
              </div>
            </S.InfoAndBtns>
          </section>
          <div>
            <ProductReviews />
          </div>
        </S.ProductDetails>
      )}
    </S.ProductDetailsContainer>
  );
}

export default ProductDetails;
