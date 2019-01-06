import LicenseSchema from './schema';

const Licenses = new Mongo.Collection('licenses');
Licenses.attachSchema(LicenseSchema);

export default Licenses;
