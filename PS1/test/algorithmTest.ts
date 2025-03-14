import assert from "assert";
import { AnswerDifficulty, Flashcard, BucketMap } from "../src/flashcards";
import {
  toBucketSets,
  getBucketRange,
  practice,
  update,
  getHint,
  computeProgress,
} from "../src/algorithm";
import { AssertionError } from "chai";

/*
 * Testing strategy for toBucketSets():
 */
describe("toBucketSets()", () => {
  // arrange
  const bucketMap = new Map<number, Set<Flashcard>>();
  const buckets = new Set<Flashcard>();

  // act
  (() => {
    buckets.add(new Flashcard("SFB", "safe from bugs", "", []));
    buckets.add(new Flashcard("ETU", "easy to understand", "", []));
    buckets.add(new Flashcard("RFC", "ready for change", "", []));

    bucketMap.set(0, buckets);
  })();

  // assert
  it("bucket positions should be preserved: `bucketMap`.get(key) === `toBucketSets(`buckets`)[key]", () => {
    toBucketSets(bucketMap).forEach((b, i) => {
      if (b !== bucketMap.get(i)) {
        throw new AssertionError(
          "Positions are not consistent after a function call!",
        );
      }
    });
  });

  it("bucketSets should be [deep[strict]]equal to array-of-buckets", () => {
    assert.deepStrictEqual(toBucketSets(bucketMap), [buckets]);
  });

  it("empty bucketMap should return empty bucketSets", () => {
    assert.deepStrictEqual(
      toBucketSets(new Map<number, Set<Flashcard>>()),
      new Array<Set<Flashcard>>(),
    );
  });
});

/*
 * Testing strategy for getBucketRange():
 *
 * TODO: Describe your testing strategy for getBucketRange() here.
 */
describe("getBucketRange()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy",
    );
  });
});

/*
 * Testing strategy for practice():
 *
 * TODO: Describe your testing strategy for practice() here.
 */
describe("practice()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy",
    );
  });
});

/*
 * Testing strategy for update():
 *
 * TODO: Describe your testing strategy for update() here.
 */
describe("update()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy",
    );
  });
});

/*
 * Testing strategy for getHint():
 *
 * TODO: Describe your testing strategy for getHint() here.
 */
describe("getHint()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy",
    );
  });
});

/*
 * Testing strategy for computeProgress():
 *
 * TODO: Describe your testing strategy for computeProgress() here.
 */
describe("computeProgress()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy",
    );
  });
});
