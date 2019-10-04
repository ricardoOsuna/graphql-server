export const afterFindClient = ClientsSchema => {
  ClientsSchema.post('find', (doc, next) => {
    doc = doc.filter(x => !x.deletedAt);
    console.log(doc);
    return next;
  });
};

export const afterFindOneClient = ClientsSchema => {
  ClientsSchema.post('findOne', doc => {
    return doc.filter(x => !x.deletedAt);
  });
};