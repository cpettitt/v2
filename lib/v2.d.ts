/**
 * An object that represents a 2-dimensional vector with standard vector
 * operations. All operations on this class produce a new copy of the vector
 * instead of modifying the vector in place.
 */
declare class V2 {
    /** The x-coordinate of the vector */
    x: number;
    /** The y-coordinate of the vector */
    y: number;
    /** Construct a new vector with the specified x and y coordinates */
    constructor(x: number, y: number);
    /**
     * Returns a new vector that is the result of adding this vector with
     * another vector.
     */
    add(other: V2): V2;
    /**
     * Returns a new vector that is the result of subtracting this vector by
     * another vector.
     */
    subtract(other: V2): V2;
    /**
     * Returns a new vector that is the result of multiplying the elements of
     * this vector by a scalar.
     */
    multiply(scalar: number): V2;
    /**
     * Returns a new vector that is the result of dividing the elements of this
     * vector by a scalar.
     */
    divide(scalar: number): V2;
    /**
     * Returns the normalized form of this vector as a new vector. A normalized
     * vector has a length of 1. This operation is potentially costly so it is
     * best to cache the result when possible.
     */
    normalize(): V2;
    /**
     * Returns the squared magnitude of this vector. This is cheaper to
     * compute than the magnitude, so should be preferred where possible.
     */
    magnitudeSquared(): number;
    /**
     * Computes the magnitude (or length) of this vector. This operation is
     * potentially cost os it is best to cache the result when possible.
     */
    magnitude(): number;
    /**
     * Computes and returns the angle of this vector in radians.
     */
    angle(): number;
    /**
     * Calculates and returns the dot product of this vector and another vector.
     */
    dot(other: V2): number;
    /**
     * Calculates and returns the cross product of this vector and another
     * vector.
     */
    cross(other: V2): number;
}
export = V2;
