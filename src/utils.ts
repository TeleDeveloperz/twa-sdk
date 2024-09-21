export function calculateAccountAge(userId: number): number {
  const creationDate = new Date(2013, 0, 1);
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.floor((Date.now() - creationDate.getTime()) / msPerDay);
}

export function validateInitData(initData: string): boolean {
  // TODO: Implement proper validation logic
  return true;
}
