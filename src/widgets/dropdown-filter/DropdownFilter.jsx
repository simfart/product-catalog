import { useCallback, useMemo, useState } from "react";

import "./DropdownFilter.scss";
import { filterItems } from "../../shared/api";
import { useGetFields } from "../../entities/hooks";

export const DropdownFilter = () => {
  const [filter, setFilter] = useState("");
  const [brands, setBrands] = useState([]);

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  //   const brandData = useCallback((formKey)=>{
  //     const { data: brandData, isLoading, isFetching} = filterItems({brand: formKey})
  //   console.log(brandData)
  //   },[])

  const { data, isLoading, isFetching } = useGetFields("brand");

  console.log(data);

  const filtered = useCallback(async () => {
    const set = await new Set(data);
    let item = set.values();
    return Array.from(item);
  }, [data]);

  const filteredItems = filtered();
  console.log(filteredItems);

  const brandFields = useMemo(() => {
    return data.map((formKey) => {
      return (
        <option value={formKey} key={formKey}>
          {formKey}
        </option>
      );
    });
  }, [filteredItems]);

  return (
    <div>
      <label htmlFor="filter">Brand </label>
      <select name="filter" value={filter} onChange={handleChangeFilter}>
        {/* {brandFields} */}
        <option value="">-- Please Select --</option>
        <option value="name">Name</option>
        <option value="date">Date</option>
        <option value="category">Category</option>
      </select>
      <div>{isFetching ? "Fetching..." : null}</div>
      <div>{isLoading ? "Loading..." : null}</div>
    </div>
  );
};
