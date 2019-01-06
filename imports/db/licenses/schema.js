import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  expirationDate: {
    type: Date,
    optional: true,
  },
});
