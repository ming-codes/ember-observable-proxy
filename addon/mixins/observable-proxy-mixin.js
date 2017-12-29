import Mixin from '@ember/object/mixin';
import Ember from 'ember';

export default Mixin.create({
  subscription: null,

  error: null,

  isComplete: false,
  isError: false,

  observable: Ember.computed({
    get() {
      throw new Ember.Error('ObservableProxy\'s observable must be set');
    },

    set(key, observable) {
      this.set('subscription', observable.subscribe({
        next: value => {
          this.set('content', value);
        },
        error: err => {
          this.set('error', err);
          this.set('isComplete', true);
          this.set('isError', true);
        },
        complete: () => {
          this.set('isComplete', true);
        }
      }));

      return observable;
    }
  }),

  destroy() {
    this._super(...arguments);

    this.get('subscription').unsubscribe();
  }
});
