'use strict';

const fs = require('fs');
const path = require('path');

const EPOCH_DATE = new Date(Date.UTC(2026, 9, 20)); // Oct 20, 2026

function checkInventory(now = new Date()) {
  const utcNow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const totalDays = Math.floor((utcNow - EPOCH_DATE) / 86400000);
  const currentDayInCycle = ((totalDays % 365) + 365) % 365 + 1; // Day 1 to 365
  const daysRemaining = 365 - currentDayInCycle;
  const currentYear = Math.floor(totalDays / 365) + 1;
  const currentCardId = `impossible_${currentDayInCycle}`;

  console.log(`[Dilemma Inventory] Date: ${utcNow.toISOString().slice(0, 10)}`);
  console.log(`[Dilemma Inventory] Cycle: Année ${currentYear} — Jour ${currentDayInCycle} / 365`);
  console.log(`[Dilemma Inventory] Carte du jour: ${currentCardId}`);
  console.log(`[Dilemma Inventory] Jours restants avant fin du cycle annuel: ${daysRemaining} jours`);

  const alertNeeded = daysRemaining <= 60;
  if (alertNeeded) {
    console.warn(`⚠️ [ALERTE RENOUVELLEMENT] Il ne reste plus que ${daysRemaining} jours avant la fin du cycle des 365 cartes !`);
  } else {
    console.log(`✓ Stock confortable : ${daysRemaining} jours restants.`);
  }

  // Set GitHub Action step outputs if running in GitHub Actions
  if (process.env.GITHUB_OUTPUT) {
    try {
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `alert_needed=${alertNeeded}\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `days_remaining=${daysRemaining}\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `current_cycle=${currentYear}\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `current_day=${currentDayInCycle}\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `current_card_id=${currentCardId}\n`);
    } catch (err) {
      console.error('Failed to write to GITHUB_OUTPUT:', err);
    }
  }

  // Set GitHub Action step summary if running in GitHub Actions
  if (process.env.GITHUB_STEP_SUMMARY) {
    try {
      const summary = `### ⚡ Swipe Panic — Stock Dilemmes 50/50
- **Cycle actuel** : Année ${currentYear}
- **Jour actuel** : ${currentDayInCycle} / 365 (\`${currentCardId}\`)
- **Jours restants avant fin de cycle** : **${daysRemaining} jours**
${alertNeeded ? '\n> ⚠️ **Attention** : Moins de 60 jours restants ! Pensez à préparer le stock de cartes pour l\'année suivante.' : '\n> ✅ Stock confortable.'}
`;
      fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
    } catch (err) {
      console.error('Failed to write to GITHUB_STEP_SUMMARY:', err);
    }
  }

  return {
    currentYear,
    currentDayInCycle,
    daysRemaining,
    alertNeeded,
    currentCardId
  };
}

if (require.main === module) {
  checkInventory();
}

module.exports = { checkInventory };

