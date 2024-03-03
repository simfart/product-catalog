import { useCallback, useState } from "react";
import { useForm, useFilterItems, useGetFields } from "../../entities/hooks";
import { DropdownFilter } from "../dropdown-filter";

export const FilterItems = () => {
  const {
    values,
    handleChange,
    setValues,
    isValid,
    setIsValid,
    setErrors,
    errors,
  } = useForm({});

  const { mutate, isLoading } = useFilterItems();

  const { data, isFetching } = useGetFields("brand");

  const [filter, setFilter] = useState("");

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const valuesArr = Object.entries(values);

      // eslint-disable-next-line no-unused-vars
      const filteredArr = valuesArr.filter(function ([key, value]) {
        return value !== "";
      });
      const newValues = Object.fromEntries(filteredArr);
      mutate(newValues);
    },
    [values, mutate]
  );

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} noValidate>
          <fieldset>
            <div>
              <label htmlFor="brand">Brand </label>
              <select name="brand" value={values.brand} onChange={handleChange}>
                <DropdownFilter brandData={data} />
              </select>
            </div>

            <input
              value={values.product || ""}
              onChange={handleChange}
              id="subheading-input"
              type="text"
              className={`popup__item ${
                errors?.product && "popup__item_error"
              }`}
              name="product"
              minLength="2"
              maxLength="200"
              placeholder="product"
            />
            <span className="popup__error">{errors.product || ""}</span>
            <input
              value={values.price || ""}
              onChange={handleChange}
              id="subheading-input"
              type="text"
              pattern="\d*"
              className={`popup__item ${errors?.price && "popup__item_error"}`}
              name="price"
              minLength="2"
              maxLength="200"
              placeholder="price"
            />
            <span className="popup__error">{errors.price || ""}</span>
            <input
              value={values.id || ""}
              onChange={handleChange}
              id="subheading-input"
              type="text"
              className={`popup__item ${errors?.id && "popup__item_error"}`}
              name="id"
              minLength="2"
              maxLength="200"
              placeholder="id"
            />
            <span className="popup__error">{errors.id || ""}</span>
          </fieldset>
          <button
            className={`popup__button ${
              isValid ? "" : "popup__button_invalid"
            }`}
            type="submit"
            aria-label="Поиск"
          >
            Поиск
          </button>
        </form>
        <div>{isValid ? "" : "не валид"}</div>
      </div>
    </div>
  );
};
