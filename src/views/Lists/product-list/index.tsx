import {  Card, Text } from 'react-native-paper';
import { COLOR,  DEFAULT_BORDER_RADIUS, SPACING } from '../../../styles/themes';
import * as S from './styles';
import { Product } from '../../../models/Product';
import { Header } from '../../../components/header';
import { StarRating } from '../../../components/star-rating';

import { FlatList, Platform } from 'react-native';
import { useEffect, useState } from 'react';
import { database } from '../../../config/firebaseconfig';

export function ProductList({navigation}: {navigation: any}) {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    database.collection('Products').onSnapshot((query) => {
      const list: Product[] = [];
      query.forEach((doc) => {
        list.push({id: doc.id, ...doc.data()} as Product);

      });
      setProducts(list);
    });
  }, []);

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
        >

          <FlatList
            data={products}
            keyExtractor={product => product.id}
            renderItem={({item: product, index}: {item: Product, index: number}) => {

              const date = new Date(product.created_at.toDate());
              const formattedDate = date.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              });

              return (
                <>
                  <Card  style={{backgroundColor: COLOR.PRIMARY_100, marginTop: index !== 0 ? 20 : null, marginBottom: index === products.length - 1  ? 80 : null}} >
                    <S.CardTitleContainer >
                      <Card.Title
                        style={{width: '70%'}}
                        title={product.title} subtitle={product.type}/>
                      <Text style={{margin: SPACING.S1}}>{formattedDate}</Text>
                    </S.CardTitleContainer>


                    <Card.Content style={{
                      flexDirection: 'row',
                      backgroundColor: COLOR.PRIMARY_200,
                      margin: SPACING.S0_75,
                      paddingTop: SPACING.S1_15,
                      borderRadius: DEFAULT_BORDER_RADIUS
                    }} >
                      <S.ProductImage
                        source={{uri: product.filename}}
                      />
                      <S.CardDetails onPress={handleOpenProductModal} activeOpacity={Platform.OS === 'android' ? 1 : 0.1}>
                        <Text style={{color: COLOR.GRAY_800}}>{product.description}</Text>

                        <S.RatingAndPriceContainer>
                          <Text>
                            <StarRating rating={product.rating}/>
                          </Text>
                          <S.Price>R$ {product.price}</S.Price>
                        </S.RatingAndPriceContainer>

                      </S.CardDetails>
                    </Card.Content>
                  </Card>
                </>
              );
            }}
          />
        </S.CardContainer>
      </S.Container>

      {/* <ListProductModal
        visible={visible}
        product={product}
        navigation={navigation}
        onClose={handleCloseModal}
      /> */}
    </>
  );
}
