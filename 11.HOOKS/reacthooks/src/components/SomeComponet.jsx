import { forwardRef, useRefm, useImperativeHandle, useRef } from "react";

const SomeComponet = forwardRef((props, ref) => {
  const localInputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = "";
        }
      },
    };
  });

  return (
    <div>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  );
});

export default SomeComponet;
