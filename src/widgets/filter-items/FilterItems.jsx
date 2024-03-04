import { useCallback, useRef, useState } from 'react';
import { useForm, useFilteredItems, useGetFields } from '../../entities/hooks';
import { DropdownFilter } from '../dropdown-filter';
import { RadioButton } from '../../shared/radio-button';

export const FilterItems = ({ showFilteredItems, hideFilteredItems }) => {
  const {
    values,
    handleChange,
    setValues,
    isValid,
    setIsValid,
    setErrors,
    errors,
  } = useForm({});

  const [filter, setFilter] = useState();

  const handleChangeFilter = (event) => {
    setValues({});
    setFilter(event.target.value);
  };
  const isChecked = (value) => filter === value;

  const { fetchFilteredItems, isLoading } = useFilteredItems(values);
  const { data } = useGetFields('brand');
  const selectInputRef = useRef();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      fetchFilteredItems();
      showFilteredItems();
    },
    [fetchFilteredItems, showFilteredItems],
  );

  const onClear = useCallback(
    (e) => {
      e.preventDefault();
      setValues({});
      selectInputRef.current.value = null;
      hideFilteredItems();
    },
    [hideFilteredItems, setValues],
  );

  const radioButtons = ['Brand', 'Product', 'Price'];

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} noValidate>
          <fieldset>
            <div className="radiobutton-div">
              {radioButtons.map((formKey) => {
                return (
                  <RadioButton
                    key={formKey}
                    id={formKey}
                    name={formKey}
                    value={formKey}
                    text={formKey}
                    onChange={handleChangeFilter}
                    checked={isChecked(formKey)}
                  />
                );
              })}
            </div>
            {filter == 'Brand' && (
              <div>
                <label htmlFor="brand">Brand </label>
                <select
                  ref={selectInputRef}
                  name="brand"
                  value={values.brand}
                  onChange={handleChange}
                >
                  <DropdownFilter brandData={data} />
                </select>
              </div>
            )}
            {filter == 'Product' && (
              <>
                <input
                  value={values.product || ''}
                  onChange={handleChange}
                  id="subheading-input"
                  type="text"
                  className={`popup__item ${
                    errors?.product && 'popup__item_error'
                  }`}
                  name="product"
                  minLength="2"
                  maxLength="200"
                  placeholder="product"
                />
                <span className="popup__error">{errors.product || ''}</span>
              </>
            )}

            {filter == 'Price' && (
              <>
                {' '}
                <input
                  value={parseFloat(values.price) || ''}
                  onChange={handleChange}
                  id="subheading-input"
                  type="number"
                  className={`popup__item ${
                    errors?.price && 'popup__item_error'
                  }`}
                  name="price"
                  minLength="2"
                  maxLength="200"
                  placeholder="price"
                />
                <span className="popup__error">{errors.price || ''}</span>
              </>
            )}
          </fieldset>
          <button
            className={`popup__button ${
              isValid ? '' : 'popup__button_invalid'
            }`}
            type="submit"
            aria-label="Поиск"
          >
            Поиск
          </button>
          <button
            className={`popup__button ${
              isValid ? '' : 'popup__button_invalid'
            }`}
            type="button"
            aria-label="Сбросить фильтр"
            onClick={onClear}
          >
            Очистить
          </button>
        </form>
        <div>{isValid ? '' : 'не валид'}</div>
      </div>
      <div>{isLoading ? 'Fetching filtered items...' : null}</div>
    </div>
  );
};
