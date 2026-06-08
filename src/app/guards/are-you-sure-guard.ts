import { CanDeactivateFn } from '@angular/router';

export const areYouSureGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  return confirm('Are you sure you want to leave this page? Any unsaved changes will be lost.');
};
