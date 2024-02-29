
import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { useGetFields } from "../hooks/useGetFields";

import { DropDown } from "./drop-button/DropDown";


export const Filter = () =>{

const { data: brandData, isLoading, isFetching} = useGetFields('brand')

const [brands, setBrands] = useState([])

const handleClick = ()=>{
        if (brandData){
      const jj = ()=>{
            let s = new Set(brandData);
            let it = s.values();
            return Array.from(it);        
        }
        setBrands(jj())
    }
}




// getFields({ field, offset, limit }: {
//     field: any;
//     offset: any;
//     limit: any;
// })


    return<form > 
    <h2 className="popup__title ">Вход</h2>
        <fieldset className="form-auth__info">
          <input
            // value={values.email || ''}
            // onChange={handleChange}
            // className={`form-auth__item ${
            //   errors?.email && 'form-auth__item_error'
            // }`}
            type="email"
            name="email"
            minLength="6"
            maxLength="40"
            placeholder="Email"
            required
          /></fieldset>
          <DropDown values={brands} handleClick={handleClick} />
          <span className="popup__error"></span>
    </form>
}

// const products = [{
//     "name": "Первый",
//     "price": "100",
//     "country": "russia",
//     "thimble": "true",
//   }, {
//     "name": "Второй",
//     "price": "200",
//     "country": "belarus",
//     "thimble": "true",
//   }, {
//     "name": "Третий",
//     "price": "1000",
//     "country": "russia",
//     "thimble": "false",
//   }, {
//     "name": "Четвертый",
//     "price": "800",
//     "country": "netherlands",
//     "thimble": "false",
//   }];
  
//   // Предположим, что это фильтр с фронта.
//   const query = {
//     "country": [
//       "netherlands",
//       "belarus"
//     ],
//     "thimble": "false"
//   };
  
//   // Ключи из фильтра, по ним будет фильтрация.
//   const queryKeys = Object.keys(query);
  
//   // Здесь желательно не забывать о типах данных.
//   // ... code.
  
//   // Фильтрация массива объектов по нескольким ключам.
//   const filtered = products.filter((product) => {
//     // При помощи метода `every` проверяем,
//     // чтобы значения каждого ключа совпадали
//     // со значениями ключей в товаре.
//     return queryKeys.every((key) => {
//       // Если несколько значений у ключа.
//       // В нашем случае это массив `country` с фронта.
//       if (Array.isArray(query[key])) {
//         return query[key].includes(product[key]);
//       }
  
//       return product[key] == query[key];
//     });
//   });
  
//   console.log(filtered);