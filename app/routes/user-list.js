import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    //returns promise of post models
    return this.store.findAll('user');
  }
});
