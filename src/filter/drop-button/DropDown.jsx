import { useCallback, useMemo, } from "react"
import { filterItems } from "../../api"


export const DropDown = ({values,handleClick}) =>{
 
  const onButtonClick = useCallback(()=>{
    handleClick()
  }, [handleClick])

  const handleFormkeyClick = useCallback((formKey)=>{
    const { data: brandData, isLoading, isFetching} = filterItems({brand: formKey})
  console.log(brandData)
  },[])

  const formContent = useMemo(() => {

    return values.map((formKey) => {
      return (
        <li key={formKey} onClick={()=>handleFormkeyClick(formKey)}>{formKey}</li>
        // <input
        //   // view="auth"
        //   key={formKey}
        //   name={formKey}
       
        //   // isInvalid={!!errors[formKey]}
        //   // placeholder={placeholderFromInputName[formKey]}
        //   // required={true}
        //   // value={values[formKey]}
        //   // onChange={handleInputChange}
        //   // minLength={2}
        //   // maxLength={15}
        //   // errText={errors[formKey]}
        // />
      )
    })
  }, [values])


    return<div className="dropdown">
      <button onClick={onButtonClick}></button>
    {formContent}
    </div>
 
}