import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { CreateAccountScreen } from '../../views/Auth/create-account-screen/CreateAccountScreen';
import { LoginScreen } from '../../views/Auth/login-screen';
import { EditProduct } from '../../views/Lists/edit-product';
import { ProductList } from '../../views/Lists/product-list';
import { AUTH_SCREENS, FLOWS, PRODUCT_SCREENS } from './constants';

const RootStack = createNativeStackNavigator<Record<string, object | undefined>>();

const AuthStack = createNativeStackNavigator<Record<string, object | undefined>>();

const ListProductStack = createNativeStackNavigator<Record<string, object | undefined>>();

function AuthStackFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={AUTH_SCREENS.LOGIN}
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
      <AuthStack.Screen
        name={AUTH_SCREENS.CREATE_ACCOUNT}
        component={CreateAccountScreen}
        options={{
          headerShown: false
        }}
      />
    </AuthStack.Navigator>
  );
}

function ListProductStackFlow() {
  return (
    <ListProductStack.Navigator
      screenOptions={{
        title: '',
        headerShown: false,
      }}
    >
      <ListProductStack.Screen
        name={PRODUCT_SCREENS.PRODUCT_LIST}
        component={ProductList}
      />
      <ListProductStack.Screen
        name={PRODUCT_SCREENS.EDIT_PRODUCT}
        component={EditProduct}
      />
    </ListProductStack.Navigator>
  );
}

const verdade = true;

function RootStackFlow() {
  return (
    <RootStack.Navigator>
      {!verdade ? (
        <RootStack.Screen
          name={FLOWS.AUTH_FLOW}
          component={AuthStackFlow}
          options={{
            headerShown: false
          }}
        />
      ) : (
        <RootStack.Screen
          name={FLOWS.PRODUCT_FLOW}
          component={ListProductStackFlow}
          options={{
            headerShown: false
          }}
        />

      )}


    </RootStack.Navigator>
  );
}

export function AppNavigation() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <NavigationContainer>
        <RootStackFlow />
      </NavigationContainer>
    </View>
  );
}
