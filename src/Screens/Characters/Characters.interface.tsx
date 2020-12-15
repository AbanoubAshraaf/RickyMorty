import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigator/MainStackNavigator';

type CharctersScreenNavigationProp = StackNavigationProp<RootStackParamList, 'characters'>;

export interface ICharactersProps {
  naviagtion: CharctersScreenNavigationProp;
}
