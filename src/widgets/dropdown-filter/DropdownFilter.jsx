import { useCallback, useMemo, useState } from "react";

import "./DropdownFilter.scss";
import { filterItems } from "../../shared/api";
import { useGetFields } from "../../entities/hooks";

export const DropdownFilter = () => {
  const [filter, setFilter] = useState("");

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  //   const brandData = useCallback((formKey)=>{
  //     const { data: brandData, isLoading, isFetching} = filterItems({brand: formKey})
  //   console.log(brandData)
  //   },[])

  const { data: brandData, isLoading, isFetching } = useGetFields("brand");

  const [brands, setBrands] = useState([]);

  useState(async () => {
    if (brandData) {
      const filter = () => {
        const set = new Set(brandData);
        let item = set.values();
        return Array.from(item);
      };
      setBrands(filter());
    }
  }, []);

  console.log(brands);

  //   const brandFields = useMemo(() => {
  //     return brands.map((formKey) => {
  //       return (
  //         <option value={formKey} key={formKey}>
  //           {formKey}
  //         </option>
  //       );
  //     });
  //   }, [brands]);

  return (
    <div>
      <label htmlFor="filter">Brand </label>
      <select name="filter" value={filter} onChange={handleChangeFilter}>
        <option value="">-- Please Select --</option>
        <option value="name">Name</option>
        <option value="date">Date</option>
        <option value="category">Category</option>
      </select>
    </div>
  );
};
