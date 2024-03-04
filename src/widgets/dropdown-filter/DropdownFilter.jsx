import { useMemo } from 'react';

export const DropdownFilter = ({ brandData }) => {
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
    <>
      <option disabled defaultValue={null}>
        {' '}
      </option>
      {brandFields}
    </>
  );
};
