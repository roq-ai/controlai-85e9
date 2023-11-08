import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { complianceTestValidationSchema } from 'validationSchema/compliance-tests';
import { AiModelInterface } from 'interfaces/ai-model';
import { ComplianceTestInterface } from 'interfaces/compliance-test';

function ComplianceTestCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: ComplianceTestInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.compliance_test.create({ data: values as RoqTypes.compliance_test });
      resetForm();
      router.push('/compliance-tests');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ComplianceTestInterface>({
    initialValues: {
      name: '',
      description: '',
      result: false,
      test_passed: false,
      ai_model_id: (router.query.ai_model_id as string) ?? null,
    },
    validationSchema: complianceTestValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Compliance Tests',
              link: '/compliance-tests',
            },
            {
              label: 'Create Compliance Test',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Compliance Test
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.description}
            label={'Description'}
            props={{
              name: 'description',
              placeholder: 'Description',
              value: formik.values?.description,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="result" display="flex" alignItems="center" mb="4" isInvalid={!!formik.errors?.result}>
            <FormLabel htmlFor="switch-result">Result</FormLabel>
            <Switch
              id="switch-result"
              name="result"
              onChange={formik.handleChange}
              value={formik.values?.result ? 1 : 0}
            />
            {formik.errors?.result && <FormErrorMessage>{formik.errors?.result}</FormErrorMessage>}
          </FormControl>

          <FormControl
            id="test_passed"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.test_passed}
          >
            <FormLabel htmlFor="switch-test_passed">Test Passed</FormLabel>
            <Switch
              id="switch-test_passed"
              name="test_passed"
              onChange={formik.handleChange}
              value={formik.values?.test_passed ? 1 : 0}
            />
            {formik.errors?.test_passed && <FormErrorMessage>{formik.errors?.test_passed}</FormErrorMessage>}
          </FormControl>
          <AsyncSelect<AiModelInterface>
            formik={formik}
            name={'ai_model_id'}
            label={'Select Ai Model'}
            placeholder={'Select Ai Model'}
            fetcher={() => roqClient.ai_model.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/compliance-tests')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'compliance_test',
    operation: AccessOperationEnum.CREATE,
  }),
)(ComplianceTestCreatePage);
