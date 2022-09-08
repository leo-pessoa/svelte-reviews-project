import * as yup from 'yup';

let values = {
    name : "",
    description: "",
    hours: "",
    activation: "",
    deactivation: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  description: yup.string().required("Descrição é obrigatória"),
  hours:  yup.number().positive("Must be more than 0").integer("Must be more than 0"),
  activation: yup.date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, "dd.MM.yyyy", new Date());
      return result;
    })
    .typeError("please enter a valid date")
    .required()
    .min("1969-11-13", "Date is too early")
});

const validationResult = schema
    .validate(values, { abortEarly: false })
    .then(() => {
      alert(JSON.stringify(values, null, 2));
    })
    .catch((err) => {
      console.log(err.errors);
    });

    // console.log message 
    //[ "Email is invalid", "Passwords do not match", "Hobby is required", "Che//ckbox must be accepted" ]