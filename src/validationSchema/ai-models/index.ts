import * as yup from 'yup';

export const aiModelValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  type: yup.string().required(),
  compliance_score: yup.number().required(),
  company_id: yup.string().nullable().required(),
});
