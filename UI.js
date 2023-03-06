class UI {
    constructor(list) {
        this.list = list;
        this.storage = new Storage(list.id);
    }
  
    displayItem(value) {
    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(value));
    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"><i>';
    // Append the link to li
    li.appendChild(link);
    // Append the li to ul
    this.list.appendChild(li);
    }

    // Remove the item from UI list
    removeItem(e) {
        if(e.target.parentElement.classList.contains('delete-item')) {
            if(confirm('Are You Sure?')) {
              e.target.parentElement.parentElement.remove();
        
              // Remove from LS
              this.storage.removeItem(e.target.parentElement.parentElement);
            }
          }
    }

    // Load from storage and display the whole UI list
    displayList() {
        let items = this.storage.getStorage();
        items.forEach((item) => this.displayItem(item));
    }
  }

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