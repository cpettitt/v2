(function(global) {
    function V2(x, y) {
        this.x = x;
        this.y = y;
    }

    V2.prototype.add = function(other) {
        return new V2(this.x+other.x, this.y+other.y);
    };

    V2.prototype.subtract = function(other) {
        return new V2(this.x-other.x, this.y-other.y);
    };

    V2.prototype.dot = function(other) {
        return this.x*other.x + this.y*other.y;
    };

    V2.prototype.cross = function(other) {
        return this.x*other.y - other.x*this.y;
    };

    V2.prototype.scale = function(scale) {
        return new V2(this.x*scale, this.y*scale);
    };

    V2.prototype.normalize = function() {
        var magnitude = this.magnitude();
        return new V2(this.x/magnitude, this.y/magnitude);
    };

    V2.prototype.magnitude = function() {
        return Math.sqrt(this.magnitudeSquared());
    };
    V2.prototype.length = V2.prototype.magnitude;

    V2.prototype.magnitudeSquared = function() {
        return this.x*this.x + this.y*this.y;
    };
    V2.prototype.lengthSquared = V2.prototype.magnitudeSquared;

    if (typeof module !== "undefined" && module.exports) {
        module.exports = V2;
    } else {
        global.V2 = V2;
    }
})(this);
