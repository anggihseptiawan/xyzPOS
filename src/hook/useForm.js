import { useState } from "react";

const useForm = (intialValue) => {
	const [values, setValues] = useState(intialValue);
	return [
		values,
		(formType, formValue) => {
			return setValues({ ...values, [formType]: formValue });
		},
	];
};

export default useForm;
