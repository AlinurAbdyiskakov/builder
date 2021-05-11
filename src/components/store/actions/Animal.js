import { ADD_ANIMAL, REMOVE_ANIMAL } from "./types";

export const add = (animal) => ({
  type: ADD_ANIMAL,
  animal: animal
});

export const remove = (animal) => ({
  type: REMOVE_ANIMAL,
  animal: animal
});