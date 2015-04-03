/**
 * An object that represents a 2-dimensional vector with standard vector
 * operations. All operations on this class produce a new copy of the vector
 * instead of modifying the vector in place.
 */
var V2 = (function () {
    /** Construct a new vector with the specified x and y coordinates */
    function V2(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Returns a new vector that is the result of adding this vector with
     * another vector.
     */
    V2.prototype.add = function (other) {
        return new V2(this.x + other.x, this.y + other.y);
    };
    /**
     * Returns a new vector that is the result of subtracting this vector by
     * another vector.
     */
    V2.prototype.subtract = function (other) {
        return new V2(this.x - other.x, this.y - other.y);
    };
    /**
     * Returns a new vector that is the result of multiplying the elements of
     * this vector by a scalar.
     */
    V2.prototype.multiply = function (scalar) {
        return new V2(scalar * this.x, scalar * this.y);
    };
    /**
     * Returns a new vector that is the result of dividing the elements of this
     * vector by a scalar.
     */
    V2.prototype.divide = function (scalar) {
        return new V2(this.x / scalar, this.y / scalar);
    };
    /**
     * Returns the normalized form of this vector as a new vector. A normalized
     * vector has a length of 1. This operation is potentially costly so it is
     * best to cache the result when possible.
     */
    V2.prototype.normalize = function () {
        var magnitude = this.magnitude();
        return new V2(this.x / magnitude, this.y / magnitude);
    };
    /**
     * Returns the squared magnitude of this vector. This is cheaper to
     * compute than the magnitude, so should be preferred where possible.
     */
    V2.prototype.magnitudeSquared = function () {
        return this.dot(this);
    };
    /**
     * Computes the magnitude (or length) of this vector. This operation is
     * potentially cost os it is best to cache the result when possible.
     */
    V2.prototype.magnitude = function () {
        return Math.sqrt(this.magnitudeSquared());
    };
    /**
     * Computes and returns the angle of this vector in radians.
     */
    V2.prototype.angle = function () {
        var result = Math.atan2(this.y, this.x);
        if (result < 0) {
            result += 2 * Math.PI;
        }
        return result;
    };
    /**
     * Calculates and returns the dot product of this vector and another vector.
     */
    V2.prototype.dot = function (other) {
        return this.x * other.x + this.y * other.y;
    };
    /**
     * Calculates and returns the cross product of this vector and another
     * vector.
     */
    V2.prototype.cross = function (other) {
        return this.x * other.y - other.x * this.y;
    };
    return V2;
})();
module.exports = V2;
