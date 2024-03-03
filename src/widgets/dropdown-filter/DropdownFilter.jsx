import { useMemo, useState } from "react";

import "./DropdownFilter.scss";

export const DropdownFilter = ({ brandData }) => {
  //   const [filter, setFilter] = useState("");

  //   const handleChangeFilter = (event) => {
  //     setFilter(event.target.value);
  //   };

  const brandFields = useMemo(() => {
    if (brandData) {
      return brandData.map((formKey) => {
        return (
          <option value={formKey} key={formKey}>
            {formKey}
          </option>
        );
      });
    }
  }, [brandData]);

  return (
    // <div>
    //   <label htmlFor="filter">Brand </label>
    //   <select name="filter" value={filter} onChange={handleChangeFilter}>
    <>{brandFields}</>
    //   </select>
    // </div>
  );
};
