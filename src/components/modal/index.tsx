import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { Product } from '../../models/Product';
import { COLOR } from '../../styles/themes';
import * as S from './styles';

interface ModalProps {
  product: Product
}

const containerStyle = {
  backgroundColor: 'white',
  marginLeft: 15,
  marginRight: 15,
  borderRadius: 8,
};

const image0 = require('../../assets/images/0.jpg');

export function ListProductModal({product}: ModalProps) {
  return (
    <Provider>
      <Portal>
        <Modal
          visible={true}
          contentContainerStyle={containerStyle}
        >
          <S.ProductImage
            source={image0}
            resizeMode='stretch'
          />
          <S.ModalContainer
          >
            <S.TitleContainer>
              <S.Title>
                {product.title}
              </S.Title>
              <S.Description>
                {product.description}
              </S.Description>

            </S.TitleContainer>

            <S.ButtonContainer>
              <Button
                style={{
                  marginTop: 30,
                  marginVertical: 15
                }}
                color={COLOR.PURPLE_500}
                icon='square-edit-outline'
                mode='contained'
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
              >
             Deletar
              </Button>
            </S.ButtonContainer>
          </S.ModalContainer>

        </Modal>
      </Portal>
    </Provider>
  );
}
