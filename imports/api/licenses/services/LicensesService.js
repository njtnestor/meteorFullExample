import LicensesRepo from '../../../db/licenses/repository';
//import UsersRepo from '../../../db/users/repository';

export default class LicensesService {
  static createLicense(data) {
    if (!data) {
      throw new Meteor.Error("Empty licenses data. Can't insert");
    }
    LicensesRepo.insert(data);
  }

  static deleteLicense(id) {
    const license = LicensesRepo.findById(id);
    if (!license) {
      throw new Meteor.Error('The license you are trying to delete does not exist');
    }
    LicensesRepo.remove(id);
  }

}
