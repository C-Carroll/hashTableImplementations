class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null)

  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    if( this.count / this.capacity >= 0.7) this.resize()
    let index = this.hashMod(key);
    let curr = this.data[index];
    while (curr) {
      if (curr.key === key) {
        curr.value = value;
        return;
      }
      curr = curr.next
    }
    let newNode = new KeyValuePair(key, value);
    newNode.next = this.data[index]
    this.data[index] = newNode;
    this.count++
  }


  read(key) {
    // let arrPos = this.data[this.hashMod(key)]
    // while (arrPos.next && arrPos.key !== key) {
    //   arrPos = arrPos.next
    // }
    // if(arrPos.key === key){
    // return arrPos.value}
    // else{
    //   return undefined
    // }
    let index = this.hashMod(key);
    let curr = this.data[index]

    while (curr) {
      if (curr.key === key){
        return curr.value
      }
      curr = curr.next
    }
  }


  resize() {
    let old = this.data.slice();
    this.capacity = this.capacity * 2
    this.data = new Array(this.capacity).fill(null);
    this.count = 0

    //console.log(old + "--old array--")
    for(let i = 0; i < old.length; i++){
      let pos = old[i]
      while(pos) {
        this.insert(pos.key, pos.value)
        pos = pos.next
      }

      //console.log(this.data + "--- new arr---")
    }
   }



  delete(key) {
    let hashModKey = this.hashMod(key);
    let currentNode = this.data[hashModKey];

    if(currentNode && currentNode.key === key){
      this.data[hashModKey] = this.data[hashModKey].next
      this.count--;
      return
    }

    while(currentNode){
      if(currentNode.next && currentNode.next.key === key){
        currentNode.next = currentNode.next.next
        this.count--;
      }
      currentNode = currentNode.next;
    }
    return `Key not found`
  }
}


module.exports = HashTable;
