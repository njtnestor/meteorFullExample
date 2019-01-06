//import Security from '../../security';
import LicensesService from '../services/LicensesService';

Meteor.methods({
  createLicense(data) {
    check(data, Object);
   // Security.checkLoggedIn(Meteor.userId());
    //Security.isAdmin(Meteor.userId());
    LicensesService.createLicense(data);
  },
  deleteLicense(id) {
    /*check(id, String);
    Security.checkLoggedIn(Meteor.userId());
    Security.isAdmin(Meteor.userId());
    LicensesService.deleteLicense(id);*/
  },
  attachLicenseUser(data) {
    /*check(data, Object);
    LicensesService.attachLicenseUser(data);*/
  },
});
