import Ember from 'ember';

export default Ember.Component.extend({

  dayToCompare: new Date("2016-06-23"),

  sortBy: ['last_version_on:asc'],
  sortedBills: Ember.computed.sort('bill', 'sortBy'),

  billsFromPastMonth: Ember.computed.filter('sortedBills', function(bill) {
    return (new Date(bill.last_version_on) > this.dayToCompare);
  }),

  billsWithShortNameWherePossible: Ember.computed.map('billsFromPastMonth', function(bill) {
    if (bill.short_title != null){
      bill.official_title = bill.short_title;//"bob";//bill.official_name;
    }
    //debugger;
    return bill;
  })


});
