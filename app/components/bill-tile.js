import Ember from 'ember';

export default Ember.Component.extend({

  dayToCompare: new Date("2016-06-23"),

  billsFromPastMonth: Ember.computed.filter('bill', function(bill) {
        return (new Date(bill.last_version_on) > this.dayToCompare);
    })

});
