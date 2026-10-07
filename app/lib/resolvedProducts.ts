import "server-only";

import { cache } from "react";
import {
  allFlowers,
  allItems,
  normalizeProductLists,
  type FlowerProduct,
  type ItemProduct,
} from "./products";
import { getTvData } from "./tvStock";

/** Resolve Web Menu data through the same guarded source used by /tv and /tv2. */
export const getResolvedProducts = cache(async () => {
  const [flowerResult, itemResult] = await Promise.all([
    getTvData({ type: "flowers", staticFlowers: allFlowers, staticItems: allItems }),
    getTvData({ type: "items", staticFlowers: allFlowers, staticItems: allItems }),
  ]);

  return normalizeProductLists(
    flowerResult.body as FlowerProduct[],
    itemResult.body as ItemProduct[]
  );
});
