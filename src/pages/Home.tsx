import Header from '../components/Header/Header';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import * as S from '../styles/Home.style';

function Home() {
  return (
    <>
      <Header />
      <S.HomeMain>
        <div className="desktopCategories">
          <Categories />
        </div>
        <Products />
      </S.HomeMain>
    </>
  );
}

export default Home;
