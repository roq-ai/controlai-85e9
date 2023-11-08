import * as yup from 'yup';

export const complianceTestValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  result: yup.boolean().nullable(),
  test_passed: yup.boolean().required(),
  ai_model_id: yup.string().nullable().required(),
});
