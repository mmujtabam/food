import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShow from "./src/screens/ResultsShowScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
