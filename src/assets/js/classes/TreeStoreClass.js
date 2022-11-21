export default class TreeStoreClass {
  data = null;

  constructor(array) {
    this.data = array;
  }

  getAll() {
    return this.data;
  }

  getItem(id) {
    return this.data.find(element => element.id == id);
  }

  getChildren(key) {
    return this.data.filter(function (item) {
      return item.parent == key;
    })
  }

  getAllChildren(id) {
    let arr = [];
    let localData = this.data;
    function func(localId) {
      let filteredData = localData.filter(item => item.parent == localId);
      for (let i = 0; i < filteredData.length; i++) {
        filteredData.forEach(item => {
          if (!arr.includes(item)) arr.push(item);
        });
        if (!localData.filter(elem => elem.parent == filteredData[i].id)) {
          return arr;
        } else {
          func(filteredData[i].id);
        }
      }
    }
    func(id)
    return arr;
  }

  getAllParents(id) {
    let arr = [];
    let localData = this.data;
    function func(localId) {
      let item = localData.find(element => element.id == localId);

      arr.push(localData.find(elem => elem.id == item.parent));
      if (item.parent == "root") return arr;
      else {
        func(item.parent);
      }
    }
    func(id);
    return arr;
  }

}
