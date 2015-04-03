var chai = require("chai");
var expect = chai.expect;

var V2 = require("../lib/v2");

describe("V2", function () {
    var v1;
    var v2;

    beforeEach(function () {
        v1 = new V2(5, 10);
        v2 = new V2(20, 30);
    });

    it("sets x and y values with `new V2(x, y)`", function () {
        expect(v1.x).equals(5);
        expect(v1.y).equals(10);
    });

    it("can add vectors", function () {
        expect(v1.add(v2).x).equals(5 + 20);
        expect(v1.add(v2).y).equals(10 + 30);
        expectUnchanged();
    });

    it("can subtract vectors", function () {
        expect(v1.subtract(v2)).eqls(new V2(5 - 20, 10 - 30));
        expect(v1.subtract(v2).x).equals(5 - 20);
        expect(v1.subtract(v2).y).equals(10 - 30);
        expectUnchanged();
    });

    it("can multiply the vector by a scalar", function () {
        expect(v1.multiply(5).x).equals(5 * 5);
        expect(v1.multiply(5).y).equals(5 * 10);
        expectUnchanged();
    });

    it("can divide the vector by a scalar", function () {
        expect(v1.divide(5).x).equals(5 / 5);
        expect(v1.divide(5).y).equals(10 / 5);
        expectUnchanged();
    });

    it("can calculate magnitude", function () {
        expect(v1.magnitude()).equals(Math.sqrt(5 * 5 + 10 * 10));
        expectUnchanged();
    });

    it("can calculate magnitude squared", function () {
        expect(v1.magnitudeSquared()).equals(5 * 5 + 10 * 10);
        expectUnchanged();
    });

    it("can normalize the vector", function () {
        var magnitude = v1.magnitude();
        expect(v1.normalize().x).equals(5 / magnitude);
        expect(v1.normalize().y).equals(10 / magnitude);
        expectUnchanged();
    });

    it("can calculate the angle of the vector in radians", function() {
        expect(new V2(0, 0).angle()).equals(0);

        expect(new V2(1, 0).angle()).equals(0);
        expect(new V2(0, 1).angle()).equals(Math.PI / 2);
        expect(new V2(-1, 0).angle()).equals(Math.PI);
        expect(new V2(0, -1).angle()).equals(3 * Math.PI / 2);
    });

    it("can calculate the dot product of two vectors", function () {
        expect(v1.dot(v2)).equals(5 * 20 + 10 * 30);
        expectUnchanged();
    });

    it("can calculate the cross product of two vectors", function () {
        expect(v1.cross(v2)).equals(5 * 30 - 20 * 10);
        expectUnchanged();
    });

    function expectUnchanged() {
        // v1 and v2 should not have been mutated
        expect(v1.x).equals(5);
        expect(v1.y).equals(10);
        expect(v2.x).equals(20);
        expect(v2.y).equals(30);
    }
});
