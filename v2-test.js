var chai = require("chai");
var expect = chai.expect;

var V2 = require("./v2");

describe("V2", function() {
    var v1;
    var v2;

    beforeEach(function() {
        v1 = new V2(5, 10);
        v2 = new V2(20, 30);
    });

    it("sets x and y values with `new V2(x, y)`", function() {
        expect(v1.x).equals(5);
        expect(v1.y).equals(10);
    });

    it("can calculate magnitude", function() {
        expect(v1.magnitude()).equals(Math.sqrt(5*5 + 10*10));
        expectUnchanged();
    });

    it("has length() === magnitude()", function() {
        expect(v1.length()).equals(v1.magnitude());
        expectUnchanged();
    });

    it("can calculate magnitude squared", function() {
        expect(v1.magnitudeSquared()).equals(5*5 + 10*10);
        expectUnchanged();
    });

    it("has lengthSquared() === magnitudeSquared()", function() {
        expect(v1.lengthSquared()).equals(v1.magnitudeSquared());
        expectUnchanged();
    });

    it("can normalize the vector", function() {
        var magnitude = v1.magnitude();
        expect(v1.normalize()).eqls(new V2(5/magnitude, 10/magnitude));
        expectUnchanged();
    });

    it("can scale the vector", function() {
        expect(v1.scale(5)).eqls(new V2(5*5, 5*10));
        expectUnchanged();
    });

    it("can add vectors", function() {
        expect(v1.add(v2)).eqls(new V2(5+20, 10+30));
        expectUnchanged();
    });

    it("can subtract vectors", function() {
        expect(v1.subtract(v2)).eqls(new V2(5-20, 10-30));
        expectUnchanged();
    });

    it("can calculate the dot product of two vectors", function() {
        expect(v1.dot(v2)).equals(5*20 + 10*30);
        expectUnchanged();
    });

    it("can calculate the cross product of two vectors", function() {
        expect(v1.cross(v2)).equals(5*30 - 20*10);
        expectUnchanged();
    });

    function expectUnchanged() {
        // v1 and v2 should not have been mutated
        expect(v1).eqls(new V2(5, 10));
        expect(v2).eqls(new V2(20, 30));
    }
});

