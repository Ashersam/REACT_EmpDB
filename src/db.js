// import PouchDB from 'pouchdb';

// export default class DB {
//     constructor(name) {
//         this.db =  new PouchDB(name);
//     }

//     async getAllNotes() {
//         let allNotes = await this.db.allDocs({ include_docs: true });
//         let products = {};

//         allNotes.rows.forEach(n => products[n.id] = n.doc);



//         return products;
//     }

//     async createNote(product) {
//         product.createdAt = new Date();
//         product.updatedAt = new Date();

//         const res = await  this.db.post({ ...product });
        

//         return res;
//     }

// }


// let _this = this;

