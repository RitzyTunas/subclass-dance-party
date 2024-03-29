var MarcusDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass("dancer");
  this.$node.addClass("marcus");
  this.v_velocity = 15 + Math.floor(Math.random() * 15 + 1);
  this.h_velocity = 15 + Math.floor(Math.random() * 15 + 1);
};

MarcusDancer.prototype = Object.create(Dancer.prototype);
MarcusDancer.prototype.constructor = MarcusDancer;
MarcusDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var x = this.$node.offset().left; // + this.h_velocity;
  var y = this.$node.offset().top; // + this.v_velocity;
  var maxWidth = $(window).width();
  var maxHeight = $(window).height();
  if(this.$node.hasClass("marcus-flip")) {
    this.$node.removeClass("marcus-flip");
  }else {
    this.$node.addClass("marcus-flip");
  }
  if (x <= 30 || x >= maxWidth - 110) {
    this.h_velocity *= -1;
  }
  if (y <= 30 || y >= maxHeight - 125) {
    this.v_velocity *= -1;
  }
  this.$node.css({left:x + this.h_velocity, top:y + this.v_velocity});
};
