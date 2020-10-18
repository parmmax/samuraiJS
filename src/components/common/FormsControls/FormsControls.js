import React from 'react'

const Element = Element => ({ input, meta, ...props }) => {
   const hasError = meta.error && meta.touched;
   return (
      <div className={ ` 'w-100 ' ${hasError ? 'text-info' : 'text-dark'} ` }>
         <Element {...input}
                  {...props}
         />
         { hasError && <small> { meta.error } </small> }
      </div>
   );
};

export const Textarea = Element("textarea")
export const Input = Element("input")