import { IExistingState, IQueryCharactersResponse } from "../GraphQl.interface";

export const mergeNewData = (
  existing: IExistingState,
  incoming: IQueryCharactersResponse
) => {
  if (incoming) {
    const { results: existingRuslts } = existing;
    const { results: icomingResults } = incoming;
    const merged = existingRuslts ? existingRuslts.slice(0) : [];
    const newIds = [...existing.ids];
    if (icomingResults)
      for (let i = 0; i < icomingResults.length; ++i) {
        if (!newIds.includes(icomingResults[i].id)) {
          newIds.push(icomingResults[i].id);
          merged[existingRuslts.length + i] = icomingResults[i];
        }
      }
    return { ...existing, ...incoming, results: merged, ids: newIds };
  }
  return existing;
};
