import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    markRead(){
      const id = this.attrs.id.value;
       this.attrs.markRead(id);
    }
  },
  willRender(){

      Ember.set(this, "emailClass", this.attrs.isRead.value ? "email read" : "email unread");

  }
});
