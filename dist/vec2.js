var Vec2 = function(){ this.constructor = Vec2; this.x = 0, this.y = 0; };
Vec2.prototype.clone = function(){ var V = new this.constructor; V.x = this.x; V.y = this.y };
Vec2.prototype.plus = function(other){ this.x += other.x; this.y += other.y; return this; };
Vec2.prototype.minus = function(other){ this.x -= other.x; this.y -= other.y; return this; };
Vec2.prototype.divide = function(other){ this.x /= other.x; this.y /= other.y; return this; };
Vec2.prototype.multiply = function(other){ this.x *= other.x; this.y *= other.y; return this; };
Vec2.prototype.mirror = function(){ this.x = -this.x; this.y = -this.y; return this; };
Vec2.prototype.distance = function( other ){ return Math.sqrt( Math.abs(Math.pow( other.x - this.x, 2)) + Math.abs(Math.pow( other.y - this.y, 2)) ); };
Vec2.prototype.angleTo = function( other ){return((-Math.PI/2+ -(Math.atan2((other.y-this.y),(other.x-this.x))))+(Math.PI*2))%(Math.PI*2) };
Vec2.prototype.pointOnRadius = function( A, R ){ var self = this; return { x: R*Math.sin(A) + self.x, y: R*Math.cos(A)+ self.y }; };
