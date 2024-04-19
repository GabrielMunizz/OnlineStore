import MobileMenu from '../MobileMenu/MobileMenu';
import SearchCategory from '../SearchCategory/SearchCategory';
import SearchInput from '../SearchInput/SearchInput';
import logo from '../../images/O.png';

import * as S from '../../styles/MobileHeader.style';

function MobileHeader() {
  return (
    <S.MobileHeader>
      <img className="logo" src={ logo } alt="" />
      <div className="content">
        <MobileMenu />
        <div className="searchAndCategory">
          <SearchInput />
          <SearchCategory />
        </div>
      </div>
    </S.MobileHeader>
  );
}

export default MobileHeader;
