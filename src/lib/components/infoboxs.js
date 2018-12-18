let VueOverlay = function (el, latlng, options) {
  this.$el = el;
  this.$latlng = latlng;

  this.$centered = options.centered;
  this.$layer = options.layer || 'overlayLayer';
};

VueOverlay.prototype = new google.maps.OverlayView();
VueOverlay.prototype.constructor = VueOverlay;

VueOverlay.prototype.onAdd = function () {
  this.$el.style.position = 'absolute';

  let panes = this.getPanes();

  panes[this.$layer].appendChild(this.$el);
};

VueOverlay.prototype.onRemove = function () {
  this.$el.parentNode.removeChild(this.$el);
};

VueOverlay.prototype.draw = function () {
  let point = this.getProjection().fromLatLngToDivPixel(this.$latlng),
      left = this.$centered ? point.x - this.$el.offsetWidth / 2 : point.x,
      top = this.$centered ? point.y - this.$el.offsetHeight / 2 : point.y;

  this.$el.style.left = left + 'px';
  this.$el.style.top = top + 'px';
};

export default VueOverlay;