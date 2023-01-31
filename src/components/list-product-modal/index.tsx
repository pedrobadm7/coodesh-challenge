import { Alert, Platform, View } from 'react-native';
import { Modal, Portal,  Button, Provider, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PRODUCT_SCREENS } from '../../core/navigation/constants';
import { Product } from '../../models/Product';
import { COLOR, SPACING } from '../../styles/themes';
import * as S from './styles';

interface ModalProps {
  product: Product
  navigation: any
  visible: boolean
  onClose: () => void
}

const containerStyle = {
  backgroundColor: 'white',
  marginLeft: 15,
  marginRight: 15,
  borderRadius: 8,

};

export function ListProductModal({product, navigation, visible, onClose}: ModalProps) {

  function handleDelete() {
    Alert.alert('DELETAR', 'Tem certeza de que deseja deletar este produto?', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Deletar',
        onPress: () => console.log('Deletar Pressed'),
        style: Platform.OS === 'ios'
          ? 'destructive'
          : undefined
      }
    ]);
  }

  function handleEdit() {
    navigation.navigate(PRODUCT_SCREENS.EDIT_PRODUCT, {
      product: product as Product
    });
  }

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          contentContainerStyle={containerStyle}
          onDismiss={onClose}
          style={{justifyContent: 'center'}}
        >
          <Icon
            name='close-box'
            size={30}
            color={COLOR.WHITE}
            style={{position: 'absolute', top: 0, right: 0, zIndex: 1, padding: SPACING.S0_75}}
            onPress={onClose}
          />
          <S.ProductImage
            source={{uri: product?.filename}}
            resizeMode='stretch'
          />

          <S.ProductDetailContainer>
            <S.ProductDetail>
              <Text>{product.title}</Text>
            </S.ProductDetail>
            <S.ProductDetail>
              <Text>Largura: {product.width}cm</Text>
            </S.ProductDetail>
            <S.ProductDetail>
              <Text>Altura: {product.height}cm</Text>
            </S.ProductDetail>

          </S.ProductDetailContainer>


          <View style={{flex: 1, padding: 10, justifyContent: 'center'}} />

          <S.ButtonContainer>
            <Button
              style={{
                marginTop: 30,
                marginVertical: 15
              }}
              color={COLOR.PURPLE_500}
              icon='square-edit-outline'
              mode='contained'
              onPress={handleEdit}
            >
             Editar
            </Button>

            <Button
              style={{
                marginTop: 30,
                marginVertical: 15
              }}
              color={COLOR.DANGER_500}
              icon='trash-can-outline'
              mode='contained'
              onPress={handleDelete}
            >
             Deletar
            </Button>
          </S.ButtonContainer>

        </Modal>
      </Portal>
    </Provider>
  );
}
