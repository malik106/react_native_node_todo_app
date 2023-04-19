import { View, Text } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input, Spinner } from 'native-base';
import PropTypes from 'prop-types';

function InputComp(props) {
  const { onAddItem, loading } = props;

  const schema = yup
    .object({
      todo: yup.string().required('Please Enter Something'),
    })
    .required();

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    onAddItem(data);
    reset();
  };

  return (
    <View>
      <Controller
        control={control}
        name="todo"
        defaultValue=""
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <>
            <Input onBlur={onBlur} placeholder="Enter your todo" onChangeText={(val) => onChange(val)} value={value} />
            {error ? <Text style={{ color: 'red' }}>{error.message}</Text> : ''}
          </>
        )}
      />
      <Button my={2} onPress={handleSubmit(onSubmit)}>
        {loading ? <Spinner color="cyan.500" /> : 'Add Item'}
      </Button>
    </View>
  );
}

InputComp.propTypes = {
  onAddItem: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default InputComp;
