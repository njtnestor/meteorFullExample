import Licenses from './licenses';

function insert(data) {
  console.log("llego")
  return Licenses.insert(data);
}

function update(id, options) {
  return Licenses.update(id, { $set: options });
}

function remove(licenseId) {
  Licenses.remove(licenseId);
}
function findAll() {
  return Licenses.find();
}

export default {
  insert,
  update,
  remove,
  findAll
};
