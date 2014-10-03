// Generated by CoffeeScript 1.7.1
import Ember from 'ember';
import PageControllerMixin from 'ember-cli-pagination/controller-mixin';
import PageControllerLocalMixin from 'ember-cli-pagination/controller-local-mixin';
import PageRouteMixin from 'ember-cli-pagination/route-mixin';
import PageRouteLocalMixin from 'ember-cli-pagination/route-local-mixin';
var Factory;

Factory = Ember.Object.extend({
  paginationTypeInner: function() {
    var ops, res;
    res = this.get('config').paginationType;
    if (res) {
      return res;
    }
    ops = this.get('config').pagination;
    if (ops) {
      return ops.type;
    }
    return null;
  },
  paginationType: function() {
    var res;
    res = this.paginationTypeInner();
    if (!(res === "local" || res === "remote")) {
      throw "unknown pagination type";
    }
    return res;
  },
  controllerMixin: function() {
    return {
      local: PageControllerLocalMixin,
      remote: PageControllerMixin
    }[this.paginationType()];
  },
  routeMixin: function() {
    return {
      local: PageRouteLocalMixin,
      remote: PageRouteMixin
    }[this.paginationType()];
  }
});

Factory.reopenClass({
  controllerMixin: function(config) {
    return Factory.create({
      config: config
    }).controllerMixin();
  },
  routeMixin: function(config) {
    return Factory.create({
      config: config
    }).routeMixin();
  }
});

export default Factory;