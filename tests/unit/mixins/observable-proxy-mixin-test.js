import EmberObject from '@ember/object';
import ObservableProxyMixinMixin from 'ember-observable-proxy/mixins/observable-proxy-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | observable-proxy-mixin');

test('it works', function(assert) {
  let ObservableProxyMixinObject = EmberObject.extend(ObservableProxyMixinMixin);
  let subject = ObservableProxyMixinObject.create({
    observable: new Observable(observer => {
      observer.next(0);
    })
  });

  debugger;

  assert.ok(subject);
});
