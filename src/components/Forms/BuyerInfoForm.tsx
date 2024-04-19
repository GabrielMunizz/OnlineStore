import { BuyerInfoType, FormAction } from '../../utils/types';
import states from '../../utils/brasilStates';
import * as S from '../../styles/Checkout.style';

type BuyerFormProps = {
  handlers: {
    buyerInfo: BuyerInfoType;
    dispatch: React.Dispatch<FormAction>;
    FILL_FORM: string,
  }
};

function BuyerInfoForm({ handlers }: BuyerFormProps) {
  const { buyerInfo, dispatch, FILL_FORM } = handlers;
  const {
    fullName,
    CPF,
    email,
    phone,
    CEP,
    address,
    complement,
    num,
    city,
    state,
  } = buyerInfo;

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target;
    dispatch({ type: FILL_FORM, key: name, value });
  };

  return (
    <S.BuyerInfoForm>
      <label>
        Nome completo:
        <input
          aria-label="fullNameInput"
          name="fullName"
          value={ fullName }
          type="text"
          required
          onChange={ handleChange }
        />
      </label>
      <label>
        CPF:
        <input
          aria-label="cpfInput"
          name="CPF"
          value={ CPF }
          type="text"
          required
          onChange={ handleChange }
        />
      </label>
      <label>
        E-mail:
        <input
          aria-label="emailInput"
          name="email"
          value={ email }
          type="email"
          required
          onChange={ handleChange }
        />
      </label>
      <label>
        Telefone:
        <input
          aria-label="phoneInput"
          name="phone"
          value={ phone }
          type="text"
          required
          onChange={ handleChange }
        />
      </label>
      <label>
        CEP:
        <input
          aria-label="cepInput"
          name="CEP"
          value={ CEP }
          type="text"
          required
          onChange={ handleChange }
        />
      </label>
      <label>
        Endereço:
        <input
          aria-label="addressInput"
          name="address"
          value={ address }
          type="text"
          required
          onChange={ handleChange }
        />
      </label>
      <label>
        Complemento:
        <input
          aria-label="complementInput"
          name="complement"
          value={ complement }
          type="text"
          required
          onChange={ handleChange }
        />
      </label>
      <label>
        Número:
        <input
          aria-label="numInput"
          name="num"
          value={ num }
          type="text"
          required
          onChange={ handleChange }
        />
      </label>
      <label>
        Cidade:
        <input
          aria-label="cityInput"
          name="city"
          value={ city }
          type="text"
          required
          onChange={ handleChange }
        />
      </label>
      <label>
        Estado:
        <select
          aria-label="stateInput"
          name="state"
          value={ state }
          onChange={ handleChange }
          required
        >
          {states.map((thisState, index) => (
            <option key={ index }>
              {thisState}
            </option>
          ))}
        </select>
      </label>
    </S.BuyerInfoForm>
  );
}

export default BuyerInfoForm;
