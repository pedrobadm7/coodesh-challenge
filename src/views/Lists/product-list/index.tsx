/* eslint-disable @typescript-eslint/no-var-requires */
import {  Card, Text } from 'react-native-paper';
import { COLOR,  DEFAULT_BORDER_RADIUS, FONT_FAMILY_BOLD, SPACING } from '../../../styles/themes';
import * as S from './styles';
import { Product } from '../../../models/Product';
import { Header } from '../../../components/Header';

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

export function ProductList() {
  return (
    <S.Container>
      <Header title='Products List' />

      <S.CardContainer>
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
            margin: 10,
            paddingTop: 15,
            borderRadius: DEFAULT_BORDER_RADIUS
          }}>
            <S.ProductImage
              source={image0}
            />
            <S.CardDetails>
              <Text style={{color: COLOR.GRAY_800}}>{product.description}</Text>

              <S.RatingAndPriceContainer>
                <Text>{product.rating} estrelas</Text>
                <Text style={{color: COLOR.PURPLE_500, fontFamily: FONT_FAMILY_BOLD}}>R$ {product.price}</Text>
              </S.RatingAndPriceContainer>
            </S.CardDetails>
          </Card.Content>

        </Card>
      </S.CardContainer>
    </S.Container>
  );
}
