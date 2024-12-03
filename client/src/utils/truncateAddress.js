export function truncateAddress(address, start, end) {
  if (address.length <= start + end) {
    return address;
  }
  const startSegment = address.slice(0, start);
  const endSegment = address.slice(-end);
  return `${startSegment}.........${endSegment}`;
}
