import { clsx, type ClassValue } from 'clsx';

/**
 * Utility for constructing className strings conditionally
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
