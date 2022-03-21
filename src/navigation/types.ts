import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type StackParamList = {
  default: undefined;
  Home: undefined;
  ListAbsent: undefined;
  TakePicture: undefined;
};
export type DefaultNavigationProps<
  T extends keyof StackParamList
> = NativeStackNavigationProp<StackParamList, T>;
