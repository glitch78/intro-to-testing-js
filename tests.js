// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

/*

describe ("sum", function() {
    it('should be a defined function', function () {
        expect(typeof sum).toBe("function");
    })
});

it("should return the number 4 when passed the numbers 2 and 2", function () {
    expect(sum(2, 2)).toBe(4);
});


 */


describe ("multiply", function() {
    it('should be a defined function', function () {
        expect(typeof multiply).toBe("function");
    })
});

it ("Should return the number 12 when passed 3 and 4", function () {
    expect(multiply(3, 4).toBe(12));
});




//having trouble with the it should return  on line 54.

describe("divide", function () {
    it('should be a defined function', function () {
        expect(typeof divide).toBe("function");
    })
});

it ("should return the 3 when passed the numbers 12 and 4", function () {
    expect(divide(12, 4).toBe(3));
});


// having trouble with the  it should return on line 64.
describe('test', function() {
    it('should be a defined function', function() {
        expect(typeof test).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof test()).toBe("string");
    });
    it('should return the string "Hello, Test!" when executed', function() {
        expect(helloWorld()).toBe("Hello, Test!");
    });
    it("should never return 'undefined' when called", function() {
        expect(test()).not.toBe(undefined);
    });
});