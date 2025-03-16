import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Index = () => {
  return (
    <View className="flex-1 bg-white px-4 pt-6">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity className="p-2">
          <View className="w-6 h-6 bg-gray-700 rounded" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Ontario, Canada ▼</Text>
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

      {/* Deal of the Day */}
      <View className="bg-gray-100 rounded-lg p-3 flex-row items-center mb-4">
        <View className="w-6 h-6 bg-gray-700 rounded-full mr-2" />
        <Text className="text-sm font-semibold">Deal Of The Day & Other Great Offers</Text>
      </View>

      {/* Promo Card */}
      <View className="bg-gray-700 rounded-lg p-4 mb-4">
        <View className="w-full h-20 bg-gray-600 rounded-lg mb-2" />
        <Text className="text-white text-lg font-semibold">Any Order Of Medicines</Text>
        <Text className="text-gray-300">Best food delivered at your door in <Text className="text-yellow-400">20 min</Text></Text>
      </View>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 bg-white py-3 px-4 flex-row justify-between border-t border-gray-300">
        {["Zomo", "Food", "Grocery", "Pharmacy", "Profile"].map((item, index) => (
          <TouchableOpacity key={index} className="items-center">
            <View className="w-6 h-6 bg-gray-700 rounded-full mb-1" />
            <Text className="text-xs">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Index;
