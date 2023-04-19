import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button, CheckIcon, FlatList, SmallCloseIcon, Spinner } from 'native-base';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 16,
    borderRadius: 4,
    marginVertical: 4,
  },
});

function TodoList(props) {
  const { todoList, onRemoveItem, onComplated, loading } = props;

  return (
    <View>
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.isCompleted ? '#d4d4d4' : '#cffafe' }]}>
            <Text style={{ flex: 1 }}>{item.text}</Text>
            <Button variant="unstyled" onPress={() => onComplated(item)} disabled={item.isCompleted}>
              {loading.update === item.id ? <Spinner color="cyan.500" size={16} /> : <CheckIcon />}
            </Button>
            <Button variant="unstyled" onPress={() => onRemoveItem(item)}>
              {loading.delete === item.id ? <Spinner color="cyan.500" size={16} /> : <SmallCloseIcon />}
            </Button>
          </View>
        )}
        contentContainerStyle={{ paddingVertical: 8 }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ),
  onRemoveItem: PropTypes.func.isRequired,
  onComplated: PropTypes.func.isRequired,
  loading: PropTypes.shape({
    add: PropTypes.bool.isRequired,
    update: PropTypes.number,
    delete: PropTypes.number,
  }),
};

TodoList.defaultProps = {
  todoList: [],
  loading: {
    add: false,
    update: null,
    delete: null,
  },
};

export default TodoList;
