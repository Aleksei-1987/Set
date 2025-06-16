import Team from "../team.js";

describe("test for class Team", () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test("an empty object is created", () => {
    expect(team.members.size).toBe(0);
  });

  test("Successful addition of a character", () => {
    team.add("dwarf");
    expect(team.members.has("dwarf")).toBe(true);
  });

  test("trying to add character again", () => {
    team.add("dwarf");
    expect(() => team.add("dwarf")).toThrow(
      new Error("Персонаж dwarf уже присутствует в команде")
    );
  });

  test("adding multiple characters", () => {
    team.addAll("dwarf", "elf", "orc");
    expect(team.toArray()).toEqual(["dwarf", "elf", "orc"]);
  });

  test("error when duplicating character", () => {
    expect(() => team.addAll("dwarf", "elf", "dwarf")).toThrow(
      new Error("Персонаж dwarf уже присутствует в команде")
    );
  });

  test("converting Set to array", () => {
    expect(Array.isArray(team.toArray())).toBe(true);
  });
});
