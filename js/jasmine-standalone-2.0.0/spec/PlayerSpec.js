describe("When fight button has been clicked", function() {
  var battle;

  beforeEach(function() {
    battle = new Battle();
  });

  it("should display text below it", function() {
    battle.update(["5", "4"]);
    expect(battle.result).toEqual("A wins!");
  });

  describe("Clear button", function() {
    it("should erase the battle values", function() {
      battle.update(["5", "4"]);
      battle.wipe();
      console.log(battle.result)
      expect(battle.result).toEqual("");
    });
  });

});
