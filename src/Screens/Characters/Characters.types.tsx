import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../Navigator/MainStackNavigator"

type CharctersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'characters'
>


export type ICharactersProps {
  naviagtion:CharctersScreenNavigationProp