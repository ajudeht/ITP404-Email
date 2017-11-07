import Ember from 'ember';

export default Ember.Component.extend({
  data:{
    emails: [
      { id: uuid(), title: "Are cats really dogs wearing costumes?", isRead : true },
      { id: uuid(), title: "Are dogs really cats wearing costumes?", isRead : false },
      { id: uuid(), title: "Are horses really dogs wearing cats?", isRead : false },
      { id: uuid(), title: "Are hats really dogs wearing horses?", isRead : false },
      { id: uuid(), title: "Are hogs really horses wearing catstumes?", isRead : false },
      { id: uuid(), title: "Are costumes really dogs wearing dogs?", isRead : true },
      { id: uuid(), title: "Are cats really dogs wearing costumes?", isRead : true },
      { id: uuid(), title: "Are dogs really cats wearing costumes?", isRead : false },
      { id: uuid(), title: "Are horses really dogs wearing cats?", isRead : false },
      { id: uuid(), title: "Are hats really dogs wearing horses?", isRead : false },
      { id: uuid(), title: "Are hogs really horses wearing catstumes?", isRead : false },
      { id: uuid(), title: "Are costumes really dogs wearing dogs?", isRead : true }
    ]
  },
  actions:{
    markRead(id){
      
      Ember.set(this.data.emails.filter( (email) => email.id == id )[0], "isRead", true);
      
    }
  }
});


function uuid() {
  var uuid = "", i, random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-"
    }
    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
}