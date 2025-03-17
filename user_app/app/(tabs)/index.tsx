import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import FoodCard from '../components/Home/FoodCard';

const Index = () => {
  return (
    <View className="flex-1 bg-white px-4 pt-6">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity className="p-2">
          <View className="w-6 h-6 bg-gray-700 rounded" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Ontario, Ohio ▼</Text>
        <TouchableOpacity className="p-2">
          <View className="w-6 h-6 bg-gray-700 rounded-full" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-4">
        <View className="w-5 h-5 bg-gray-500 rounded mr-2" />
        <TextInput
          placeholder="Restaurant, item & r"
          placeholderTextColor="gray"
          className="flex-1 text-base"
        />
        <TouchableOpacity>
          <View className="w-5 h-5 bg-gray-500 rounded" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View className="flex-row justify-between mb-4">
        {["Food", "Grocery", "Pharmacy"].map((category, index) => (
          <TouchableOpacity key={index} className="items-center">
            <View className="w-16 h-16 bg-gray-700 rounded-lg mb-2" />
            <Text className="text-sm">{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </View>
  );
};

export default Index;
