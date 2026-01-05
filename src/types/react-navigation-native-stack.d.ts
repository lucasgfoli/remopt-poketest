declare module '@react-navigation/native-stack' {
  import { ComponentType } from 'react';

  export function createNativeStackNavigator<T = any>(): any;

  export type NativeStackScreenProps<ParamList, RouteName extends keyof ParamList> = {
    navigation: any;
    route: { params: ParamList[RouteName] };
  };
}
