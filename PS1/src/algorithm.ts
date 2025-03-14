/**
 * Problem Set 1: Flashcards - Algorithm Functions
 *
 * This file contains the implementations for the flashcard algorithm functions
 * as described in the problem set handout.
 *
 * Please DO NOT modify the signatures of the exported functions in this file,
 * or you risk failing the autograder.
 */

import { Flashcard, AnswerDifficulty, BucketMap } from "./flashcards";

/**
 * Converts a Map representation of learning buckets into an Array-of-Set representation.
 *
 * @param buckets Map where keys are bucket numbers and values are sets of Flashcards.
 * @returns Array of Sets, where element at index i is the set of flashcards in bucket i.
 *          Buckets with no cards will have empty sets in the array.
 * @spec.requires buckets is a valid representation of flashcard buckets.
 */
export function toBucketSets(buckets: BucketMap): Array<Set<Flashcard>> {
  const bucketSets: Array<Set<Flashcard>> = [];
  buckets.forEach((buckets, i) => {
    bucketSets[i] = buckets;
  });

  return bucketSets;
}

/**
 * Finds the range of buckets that contain flashcards, as a rough measure of progress.
 *
 * @param buckets Array-of-Set representation of buckets.
 * @returns object with minBucket and maxBucket properties representing the range,
 *          or undefined if no buckets contain cards.
 * @spec.requires buckets is a valid Array-of-Set representation of flashcard buckets.
 */
export function getBucketRange(
  buckets: Array<Set<Flashcard>>,
): { minBucket: number; maxBucket: number } | undefined {
  if (buckets.length === 0) {
    return undefined;
  }

  let minBucket = -1;
  let maxBucket = -1;

  for (let i = 0; i < buckets.length; i++) {
    const bucket = buckets[i];
    if (bucket && bucket.size > 0) {
      minBucket = i;
      break;
    }
  }

  if (minBucket === -1) {
    return undefined;
  }

  for (let i = buckets.length - 1; i >= 0; i--) {
    const bucket = buckets[i];
    if (bucket && bucket.size > 0) {
      maxBucket = i;
      break;
    }
  }

  return { minBucket, maxBucket };
}

/**
 * Selects cards to practice on a particular day.
 *
 * @param buckets Array-of-Set representation of buckets.
 * @param day current day number (starting from 0).
 * @returns a Set of Flashcards that should be practiced on day `day`,
 *          according to the Modified-Leitner algorithm.
 * @spec.requires buckets is a valid Array-of-Set representation of flashcard buckets.
 */
export function practice(
  buckets: Array<Set<Flashcard>>,
  day: number,
): Set<Flashcard> {
  const practiceFlashcards = new Set<Flashcard>();
  for (
    let i = 0, dayth = 2 ** i;
    dayth <= day && day % dayth == 0;
    ++i, dayth = 2 ** i
  ) {
    buckets[i]?.forEach((fc) => {
      practiceFlashcards.add(fc);
    });
  }

  return practiceFlashcards;
}

/**
 * Updates a card's bucket number after a practice trial.
 *
 * @param buckets Map representation of learning buckets.
 * @param card flashcard that was practiced.
 * @param difficulty how well the user did on the card in this practice trial.
 * @returns updated Map of learning buckets.
 * @spec.requires buckets is a valid representation of flashcard buckets.
 */
export function update(
  buckets: BucketMap,
  card: Flashcard,
  difficulty: AnswerDifficulty,
): BucketMap {
  // TODO: Implement this function
  throw new Error("Implement me!");
}

/**
 * Generates a hint for a flashcard.
 *
 * @param card flashcard to hint
 * @returns a hint for the front of the flashcard.
 * @spec.requires card is a valid Flashcard.
 */
export function getHint(card: Flashcard): string {
  // TODO: Implement this function (and strengthen the spec!)
  throw new Error("Implement me!");
}

/**
 * Computes statistics about the user's learning progress.
 *
 * @param buckets representation of learning buckets.
 * @param history representation of user's answer history.
 * @returns statistics about learning progress.
 * @spec.requires [SPEC TO BE DEFINED]
 */
export function computeProgress(buckets: any, history: any): any {
  // Replace 'any' with appropriate types
  // TODO: Implement this function (and define the spec!)
  throw new Error("Implement me!");
}
