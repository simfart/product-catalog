import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm, useFilteredItems, useGetFields } from '../../entities/hooks';
import { DropdownFilter } from '../dropdown-filter';
import { RadioButton } from '../../shared/radio-button';

import './FilterItems.scss';

export const FilterItems = ({ showFilteredItems, hideFilteredItems }) => {
  const {
    values,
    handleChange,
    setValues,
    isValid,
    errors,
    setErrors,
    setIsValid,
  } = useForm({});

  const [filter, setFilter] = useState();

  const handleChangeFilter = (event) => {
    setValues({});
    setErrors({});
    setFilter(event.target.value);
  };
  const isChecked = (value) => filter === value;

  const { fetchFilteredItems } = useFilteredItems(values);
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
      setErrors({});
      hideFilteredItems();
      setIsValid(false);
    },
    [hideFilteredItems, setErrors, setIsValid, setValues],
  );

  useEffect(() => {
    if (!values || values == null) {
      setIsValid(false);
    }
  }, [setIsValid, values]);
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
                <select
                  ref={selectInputRef}
                  name="brand"
                  value={values.brand || ''}
                  onChange={handleChange}
                  className="filter_input"
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
                  className="filter_input"
                  name="product"
                  minLength="2"
                  maxLength="200"
                  placeholder="product"
                />
              </>
            )}

            {filter == 'Price' && (
              <>
                <input
                  value={parseFloat(values.price) || ''}
                  onChange={handleChange}
                  id="subheading-input"
                  type="number"
                  className="filter_input"
                  name="price"
                  minLength="2"
                  maxLength="200"
                  placeholder="price"
                />
              </>
            )}
          </fieldset>
          <span>{errors.product || ''}</span>
          <div className="filter__buttons">
            <button
              className={`${isValid ? '' : 'button_disabled'}`}
              type="submit"
              aria-label="Search"
            >
              Search
            </button>
            <button type="button" aria-label="Reset" onClick={onClear}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
