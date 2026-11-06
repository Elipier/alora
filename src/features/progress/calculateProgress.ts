export function calculateProgress(
  completed: number,
  total: number,
): number | null {
  if (completed < 0) throw new Error("Completed cannot be negative");
  if (total < 0) throw new Error("Total cannot be negative");

  if (total === 0) return null;
  const progression = (completed / total) * 100;
  return Math.min(progression, 100);
}
