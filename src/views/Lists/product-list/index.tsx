import {  Card, Text } from 'react-native-paper';
import { COLOR,  DEFAULT_BORDER_RADIUS, SPACING } from '../../../styles/themes';
import * as S from './styles';
import { Product } from '../../../models/Product';
import { Header } from '../../../components/header';
import { StarRating } from '../../../components/star-rating';

import { FlatList, Platform } from 'react-native';
import { useEffect, useState } from 'react';
import { database } from '../../../config/firebaseconfig';
import { formatCurrency } from '../../../utils/general';
import { ListProductModal } from '../../../components/list-product-modal';

const PAGE_LIMIT = 20;

export function ProductList({navigation}: {navigation: any}) {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>({} as Product);
  const [startAfter, setStartAfter] = useState<any>(null);

  function fetchData() {

    database
      .collection('Products')
      .orderBy('created_at', 'asc')
      .startAfter(startAfter)
      .limit(PAGE_LIMIT)
      .onSnapshot((query) => {
        const list: Product[] = [];
        query.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()} as Product);

        });
        setProducts([...products, ...list]);
        setStartAfter(query.docs[query.docs.length - 1]);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);


  function handleOpenProductModal(product: Product) {
    setVisible(true);
    setProduct(product);
  }

  function handleCloseModal() {
    setVisible(false);
  }

  function handleEndReached() {
    if (!startAfter) return;
    fetchData();
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
                      <S.CardDetails onPress={() => handleOpenProductModal(product)} activeOpacity={Platform.OS === 'android' ? 1 : 0.1}>
                        <Text style={{color: COLOR.GRAY_800}}>{product.description}</Text>

                        <S.RatingAndPriceContainer>
                          <Text>
                            <StarRating rating={product.rating}/>
                          </Text>
                          <S.Price>{formatCurrency(product.price)}</S.Price>
                        </S.RatingAndPriceContainer>

                      </S.CardDetails>
                    </Card.Content>
                  </Card>
                </>
              );
            }}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.1}
          />
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
