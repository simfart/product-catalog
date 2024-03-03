import { useCallback, useRef, useState } from 'react';
import { useForm, useFilteredItems, useGetFields } from '../../entities/hooks';
import { DropdownFilter } from '../dropdown-filter';

export const FilterItems = ({ showFilteredItems }) => {
  const {
    values,
    handleChange,
    setValues,
    isValid,
    setIsValid,
    setErrors,
    errors,
  } = useForm({});

  const { fetchFilteredItems, isLoading } = useFilteredItems(values);
  const { data, isFetching } = useGetFields('brand');
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
    },
    [setValues],
  );

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} noValidate>
          <fieldset>
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
            <input
              value={values.price || ''}
              onChange={handleChange}
              id="subheading-input"
              type="number"
              pattern="\d*"
              className={`popup__item ${errors?.price && 'popup__item_error'}`}
              name="price"
              minLength="2"
              maxLength="200"
              placeholder="price"
            />
            <span className="popup__error">{errors.price || ''}</span>
            <input
              value={values.id || ''}
              onChange={handleChange}
              id="subheading-input"
              type="text"
              className={`popup__item ${errors?.id && 'popup__item_error'}`}
              name="id"
              minLength="2"
              maxLength="200"
              placeholder="id"
            />
            <span className="popup__error">{errors.id || ''}</span>
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
    </div>
  );
};
