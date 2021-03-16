
import store from 'store';

class LocalStorage {
    constructor() {
        this.data = false;
    }

  setData = (key, data) => {
      store.set(key, data);
  };

  getData = key => store.get(key);

  removeData = key => {
      return store.remove(key);
  };

  clearStorage = () => {
      return store.clearAll();
  };
}

export default new LocalStorage();