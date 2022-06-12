// @ts-check

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  const HOURS_WORKED_A_DAY = 8;
  return ratePerHour * HOURS_WORKED_A_DAY;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const MONTHLY_BILLABLE_DAYS = 22;
  let project_duration_in_months = Math.floor(numDays / MONTHLY_BILLABLE_DAYS);
  let non_discounted_project_days = numDays % MONTHLY_BILLABLE_DAYS;

  let standard_monthly_rate = dayRate(ratePerHour) * (project_duration_in_months * MONTHLY_BILLABLE_DAYS);
  let discounted_monthly_rate = standard_monthly_rate * discount;
  let non_discounted_monthly_rate = non_discounted_project_days * dayRate(ratePerHour);
  return Math.ceil(discounted_monthly_rate + non_discounted_monthly_rate);
}
