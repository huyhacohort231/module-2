class Storage {
    constructor(list) {
        this.list = list;
    }

    getStorage() {
        let items;
        if(localStorage.getItem(this.list) === null){
            items = [];
          } else {
            items = JSON.parse(localStorage.getItem(this.list));
          }
        return items;
    }

    storeItem(item) {
        let items = this.getStorage();
        items.push(item);
        localStorage.setItem(this.list, JSON.stringify(items));
      }

    removeItem(itemHtml) {
        let items = this.getStorage();
        items.forEach((item, index) => {
            if(itemHtml.textContent === item) {
                items.splice(index,1);
            }
        });
        localStorage.setItem(this.list, JSON.stringify(items));
    }

    clearStorage() {
        localStorage.setItem(this.list, JSON.stringify([]));
    }
}