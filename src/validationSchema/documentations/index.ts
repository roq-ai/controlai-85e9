import * as yup from 'yup';

export const documentationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().nullable(),
  ai_model_id: yup.string().nullable().required(),
});
