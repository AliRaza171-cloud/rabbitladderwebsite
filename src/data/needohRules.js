// Official rules text supplied by Rabbit Ladders.
// Items flagged for the store to confirm:
//  - Section 4 originally read "[ONE]"; shown here as "one".
//  - Section 6 says "NeeDoh Holiday Calendar" (no "Advent"); kept as supplied.
//  - Section 8 uses Hello@rabbitladders.com while the site lists info@rabbitladders.com.

export const PROMO_SUMMARY = {
  eyebrow: 'Holiday promotion · Official rules',
  title: 'NeeDoh Holiday Advent Calendar Drawing',
  headline: 'NO PURCHASE NECESSARY TO ENTER OR WIN. A PURCHASE WILL NOT INCREASE YOUR ODDS OF BEING SELECTED.',
  facts: [
    { label: 'Enter by', value: 'Nov 18, 2026 · 5pm PT' },
    { label: 'Selected', value: '75 participants' },
    { label: 'Promotional price', value: '$30 + sales tax' },
    { label: 'How to enter', value: 'In-store form · one per person' },
  ],
  note: 'Open to California residents. Selected participants win the chance to buy one calendar at the promotional price — the calendar itself is not free.',
};

// Each block is either a paragraph string, { list: [...] }, { highlight: '...' } or { address: [...] }.
export const RULES = [
  {
    id: 'promotion',
    title: '1. Promotion',
    blocks: [
      'Rabbit Ladders, Inc. (“Sponsor”) is conducting a promotional drawing for 75 eligible participants to receive the opportunity to each purchase one NeeDoh Holiday Advent Calendar at the promotional purchase price specified below.',
      'This promotion is a free promotional drawing and is not a raffle. No payment or purchase is required to enter.',
    ],
  },
  {
    id: 'promotion-period',
    title: '2. Promotion Period',
    blocks: [
      'The promotion begins on November 4, 2026 and ends November 18, 2026 at 5pm Pacific Time (“Promotion Period”).',
      'Entries received after the Promotion Period will not be eligible.',
    ],
  },
  {
    id: 'eligibility',
    title: '3. Eligibility',
    blocks: [
      'The promotion is open to eligible individuals who reside in California.',
      'Sponsor reserves the right to verify eligibility.',
    ],
  },
  {
    id: 'how-to-enter',
    title: '4. How to Enter',
    blocks: [
      'To enter, participants must complete the free entry process described by Sponsor during the Promotion Period:',
      { list: ['Complete an in-store form.'] },
      'No purchase is necessary. Participants do not need to purchase any product or service from Sponsor to enter, and making a purchase will not improve an entrant’s odds of being selected.',
      'Only one entry per person is permitted during the Promotion Period.',
      'Duplicate or automated entries may be disqualified.',
    ],
  },
  {
    id: 'random-drawing',
    title: '5. Random Drawing',
    blocks: [
      'Potential winners will be selected at random from all eligible entries received during the Promotion Period.',
      'The drawing will take place on or after November 18, 2026.',
      'The odds of being selected depend on the total number of eligible entries received.',
    ],
  },
  {
    id: 'prize',
    title: '6. Prize / Purchase Opportunity',
    blocks: [
      'The selected participant will receive the right to purchase one NeeDoh Holiday Calendar from Sponsor for:',
      { highlight: 'Promotional Purchase Price: $30 + Sales Tax' },
      'The selected participant does not receive the NeeDoh Holiday Advent Calendar for free. The promotion awards the selected participant an opportunity to purchase the item at the stated promotional price.',
      'The purchase opportunity is subject to availability and the terms stated in these Official Rules.',
      'Any additional taxes, shipping charges, or other mandatory charges will be disclosed to the selected participant before purchase.',
    ],
  },
  {
    id: 'purchase-right',
    title: '7. Exercising the Purchase Right',
    blocks: [
      'The selected participant must Purchase The Calendar within 72 hours after notification.',
      'If the selected participant is determined to be ineligible, cannot be contacted, or does not complete the purchase within the required period, Sponsor may select alternate participants.',
      'The purchase right is personal to the selected participant and may not be transferred, sold, or exchanged for cash.',
    ],
  },
  {
    id: 'winner-notification',
    title: '8. Winner Notification',
    blocks: [
      'The potential winner will be contacted via e-mail from Hello@rabbitladders.com, using the information provided at entry.',
      'The potential winner may be required to confirm eligibility and provide information reasonably necessary to complete the promotion.',
      'If the potential winner cannot be contacted or does not satisfy the requirements of these Official Rules, an alternate participant may be selected.',
    ],
  },
  {
    id: 'no-purchase-advantage',
    title: '9. No Purchase Advantage',
    blocks: [
      'No purchase is necessary to participate.',
      'Purchasing any product or service from Sponsor does not increase an entrant’s odds of being selected.',
    ],
  },
  {
    id: 'item-availability',
    title: '10. Item Availability',
    blocks: ['The purchase opportunity is subject to the availability of the NeeDoh Holiday Advent Calendar.'],
  },
  {
    id: 'general-conditions',
    title: '11. General Conditions',
    blocks: [
      'Sponsor reserves the right to disqualify any participant who violates these Official Rules or attempts to interfere with the proper operation of the promotion.',
      'Sponsor is not responsible for lost, late, incomplete, inaccurate, or technically defective entries.',
      'Sponsor’s decisions concerning the administration of the promotion are final, subject to applicable law.',
    ],
  },
  {
    id: 'privacy',
    title: '12. Privacy',
    blocks: [
      'Information submitted for entry will be used to administer this promotion and for any other purposes disclosed at the time of collection and permitted by applicable law.',
    ],
  },
  {
    id: 'sponsor',
    title: '13. Sponsor',
    blocks: [{ address: ['Rabbit Ladders', '860 S. PCH, #107', 'El Segundo, CA 90245'] }],
  },
  {
    id: 'california-disclosure',
    title: '14. California Disclosure',
    boxed: true,
    blocks: [
      'This promotion is intended to provide a free opportunity to participate. No purchase or payment is required to enter, and purchasing from Sponsor does not increase an entrant’s chance of being selected.',
      'These Official Rules are subject to applicable federal, state, and local laws and regulations.',
      'This promotion is not sponsored, endorsed, administered by, or affiliated with NeeDoh or its manufacturer unless expressly stated otherwise.',
    ],
  },
];
