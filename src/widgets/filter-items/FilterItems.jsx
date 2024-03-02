import { useForm, useFilterItems } from "../../entities/hooks";
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
  function handleSubmit(e) {
    e.preventDefault();
    mutate(values);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} noValidate>
          <fieldset>
            <DropdownFilter />
            <input
              value={values.product || ""}
              onChange={handleChange}
              id="subheading-input"
              type="text"
              className={`popup__item ${errors?.about && "popup__item_error"}`}
              name="product"
              minLength="2"
              maxLength="200"
              placeholder="product"
            />
            <input
              value={values.price || ""}
              onChange={handleChange}
              id="subheading-input"
              type="text"
              className={`popup__item ${errors?.about && "popup__item_error"}`}
              name="price"
              minLength="2"
              maxLength="200"
              placeholder="price"
            />
            <input
              value={values.id || ""}
              onChange={handleChange}
              id="subheading-input"
              type="text"
              className={`popup__item ${errors?.about && "popup__item_error"}`}
              name="id"
              minLength="2"
              maxLength="200"
              placeholder="id"
            />
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
