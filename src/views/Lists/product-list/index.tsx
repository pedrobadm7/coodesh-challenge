import {  Card, Text } from 'react-native-paper';
import { COLOR,  DEFAULT_BORDER_RADIUS, SPACING } from '../../../styles/themes';
import * as S from './styles';
import { Product } from '../../../models/Product';
import { Header } from '../../../components/header';
import { StarRating } from '../../../components/star-rating';

import { Platform, View } from 'react-native';
import { useState } from 'react';
import { ListProductModal } from '../../../components/list-product-modal';


const product = {
  title: 'Brown eggs',
  type: 'dairy',
  description: 'Raw organic brown eggs in a basket',
  filename: '0.jpg',
  height: 600,
  width: 400,
  price: 28.1,
  rating: 4,
} satisfies Product;

const image0 = require('../../../assets/images/0.jpg');

export function ProductList({navigation}: any) {
  const [visible, setVisible] = useState(false);

  function handleOpenProductModal() {
    setVisible(true);
  }

  function handleCloseModal() {
    setVisible(false);
  }

  return (
    <>
      <S.Container>
        <Header title='Products List' />

        <S.CardContainer
          onPress={handleOpenProductModal}
          activeOpacity={Platform.OS === 'android' ? 1 : 0.1}>

          <Card style={{backgroundColor: COLOR.PRIMARY_100}}>
            <S.CardTitleContainer>
              <Card.Title
                style={{width: '70%'}}
                title={product.title} subtitle={product.type}/>
              <Text style={{margin: SPACING.S1}}>28/01/2023</Text>
            </S.CardTitleContainer>


            <Card.Content style={{
              flexDirection: 'row',
              backgroundColor: COLOR.PRIMARY_200,
              margin: SPACING.S0_75,
              paddingTop: SPACING.S1_15,
              borderRadius: DEFAULT_BORDER_RADIUS
            }}>
              <S.ProductImage
                source={image0}
              />
              <S.CardDetails>
                <Text style={{color: COLOR.GRAY_800}}>{product.description}</Text>

                <S.RatingAndPriceContainer>
                  <Text>
                    <StarRating />
                  </Text>
                  <S.Price>R$ {product.price}</S.Price>
                </S.RatingAndPriceContainer>

              </S.CardDetails>
            </Card.Content>
          </Card>

        </S.CardContainer>
      </S.Container>

      <ListProductModal
        visible={visible}
        product={product}
        navigation={navigation}
        onClose={handleCloseModal}
      />
    </>
  );
}
