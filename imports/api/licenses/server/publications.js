/* for publications eslint func-names and consistent-return rules should be disabled */
/* eslint func-names: "off" */
/* eslint consistent-return: "off" */

import LicensesRepo from '../../../db/licenses/repository';

//import Security from '../../security';

Meteor.publish('licenses-list', function () {
  this.unblock();

  //if (Security.isAdmin(this.userId)) {
    return LicensesRepo.findAll();
  //}
  //return this.ready();
});
