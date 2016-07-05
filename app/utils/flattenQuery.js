export default function flattenQuery(query) {
  // Don't take page because using lazy load
  const { page, filter, ...rest } = query; // eslint-disable-line
  return { ...filter, ...rest };
}
