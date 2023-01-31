import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Product } from '../../../models/Product';
import { COLOR, SPACING } from '../../../styles/themes';
import { ErrorMessage } from '@hookform/error-message';


export function EditProduct({route}: {
  route: {
    params: {
      product: Product
    }
  }
}) {


  const {product} = route.params;

  const {control, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      title: '',
      type: product.type,
      description: product.description,
      height: product.height,
      width: product.width,
      price: product.price
    }
  });

  console.log({errors});

  return (
    <SafeAreaView style={{marginHorizontal: 10, marginTop: 10}}>
      <Text style={{fontSize: SPACING.S2, padding: 5}}>{product.title}</Text>

      <View style={{marginTop: 25}}>
        <Controller
          name='title'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'O título é obrigatório'
            }
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <TextInput
                mode='outlined'
                label='Título'
                placeholder={product.title}
                outlineColor={COLOR.GRAY_500}
                activeOutlineColor={COLOR.PURPLE_500}
                value={value}
                onChangeText={(val: string) => onChange(val)}
                onBlur={onBlur}
              />

              <ErrorMessage
                errors={errors}
                name="title"
                render={({ message }) => <p>{message}</p>}
              />
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
