export const restaurantServiceMock = {
  fetchRestaurants(initialSearch: string): Promise<Array<Object>> {
    return Promise.resolve([
      {'name': 'Chicago Pizza', 'id': '123'},
      {'name': 'Chicago Pizza', 'id': '456'}
    ]);
  },
  getRestaurants() {
    return [
      {'name': 'Chicago Pizza', 'id': '123'},
      {'name': 'Orlando Pizza', 'id': '456'},
      {'name': 'Philly Pizza', 'id': '123'},
      {'name': 'Boston Pizza', 'id': '456'},
      {'name': 'LA Pizza', 'id': '123'},
      {'name': 'San Diego Pizza', 'id': '456'},
      {'name': 'Atlanta Pizza', 'id': '456'},
      {'name': 'Italian Pizza', 'id': '123'},
      {'name': 'Deep Dish Pizza', 'id': '456'},
      {'name': 'Fun Pizza', 'id': '123'},
      {'name': 'Cold Pizza', 'id': '456'}
    ];
  },
  getById(id: string) {
    return {'name': 'Chicago Pizza', 'id': '123'};
  },
  handleError() {
    return null;
  }
};