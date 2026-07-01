import type { User, Swing, SwingAnalysis, TipDrill, CreditTransaction } from '@/types';

// Demo users
export const mockUsers: User[] = [
  {
    id: '1',
    email: 'demo@moradai.us',
    name: 'Demo User',
    role: 'user',
    subscriptionStatus: 'active',
    subscriptionTrialEndsAt: null,
    monthlyCreditsTotal: 10,
    monthlyCreditsUsed: 3,
    bonusCredits: 2,
    handicap: 15,
    dominantHand: 'right',
    createdAt: '2026-01-15T10:00:00Z',
  },
  {
    id: '2',
    email: 'admin@moradai.us',
    name: 'Admin User',
    role: 'admin',
    subscriptionStatus: 'active',
    subscriptionTrialEndsAt: null,
    monthlyCreditsTotal: 10,
    monthlyCreditsUsed: 0,
    bonusCredits: 0,
    handicap: 8,
    dominantHand: 'right',
    createdAt: '2026-01-01T10:00:00Z',
  },
  {
    id: '3',
    email: 'michael@example.com',
    name: 'Michael R.',
    role: 'user',
    subscriptionStatus: 'active',
    subscriptionTrialEndsAt: null,
    monthlyCreditsTotal: 10,
    monthlyCreditsUsed: 7,
    bonusCredits: 0,
    handicap: 8,
    dominantHand: 'right',
    createdAt: '2026-02-20T10:00:00Z',
  },
  {
    id: '4',
    email: 'david@example.com',
    name: 'David K.',
    role: 'user',
    subscriptionStatus: 'active',
    subscriptionTrialEndsAt: null,
    monthlyCreditsTotal: 10,
    monthlyCreditsUsed: 5,
    bonusCredits: 0,
    handicap: 14,
    dominantHand: 'right',
    createdAt: '2026-03-10T10:00:00Z',
  },
  {
    id: '5',
    email: 'james@example.com',
    name: 'James T.',
    role: 'user',
    subscriptionStatus: 'cancelled',
    subscriptionTrialEndsAt: null,
    monthlyCreditsTotal: 10,
    monthlyCreditsUsed: 0,
    bonusCredits: 0,
    handicap: 4,
    dominantHand: 'right',
    createdAt: '2026-01-05T10:00:00Z',
  },
];

// Sample analysis report for demo swing
const sampleAnalysis1: SwingAnalysis = {
  overallScore: 62,
  modelAlignment: 'Model_2_CP',
  positionScores: [
    { position: 'P1', score: 7, deviations: ['slight_forward_ball_position', 'minor_hip_misalignment'] },
    { position: 'P2', score: 6, deviations: ['clubface_slightly_open', 'early_wrist_set'] },
    { position: 'P3', score: 7, deviations: ['shaft_slightly_across_line'] },
    { position: 'P4', score: 5, deviations: ['insufficient_shoulder_turn', 'flying_trail_elbow'] },
    { position: 'P5', score: 5, deviations: ['upper_body_initiates_downswing'] },
    { position: 'P6', score: 6, deviations: ['slight_over_the_top_path'] },
    { position: 'P7', score: 7, deviations: ['minor_scooping_tendency'] },
    { position: 'P8', score: 7, deviations: [] },
    { position: 'P9', score: 6, deviations: ['insufficient_body_rotation'] },
    { position: 'P10', score: 7, deviations: ['minor_balance_issue'] },
  ],
  primaryFaults: [
    {
      fault: 'Flying Trail Elbow at P4',
      positions: ['P4'],
      impact: 'Loss of swing plane control; leads to over-the-top delivery and weak fades or slices',
      severity: 'high',
      recommendedDrills: ['wall_drill', 'towel_under_arm_drill'],
    },
    {
      fault: 'Upper Body Initiates Downswing',
      positions: ['P5'],
      impact: 'Reduced power potential; contributes to over-the-top path and inconsistent contact',
      severity: 'medium',
      recommendedDrills: ['step_drill', 'hip_bump_drill'],
    },
    {
      fault: 'Insufficient Shoulder Turn',
      positions: ['P4'],
      impact: 'Reduced coil and power; compensations often lead to inconsistent contact',
      severity: 'medium',
      recommendedDrills: ['90_degree_rotation_drill', 'hip_restriction_drill'],
    },
  ],
  rootCauseAnalysis: 'The flying trail elbow at P4 is the primary fault that cascades through the rest of the swing. When the trail elbow moves away from the body at the top, it creates a chain reaction: the upper body compensates by initiating the downswing early, which steepens the shaft and produces an over-the-top delivery path. This sequence is the root cause of the weak fade/slice pattern and inconsistent contact.',
  improvementPriorities: ['Trail elbow position at top', 'Shoulder turn depth', 'Downswing sequencing'],
  model1Assessment: { compatibility: 'low', reasoning: 'Trail arm dominant mechanics would exacerbate current flying elbow fault' },
  model2CPAssessment: { compatibility: 'high', reasoning: 'Centered pivot pattern suits current body mechanics' },
  model2CFAssessment: { compatibility: 'medium', reasoning: 'CF pattern achievable with elbow correction and improved sequencing' },
  practicePlan: {
    duration: '30_days',
    focusAreas: ['Trail elbow discipline', 'Shoulder turn flexibility', 'Transition sequencing'],
    weeklyStructure: [
      'Week 1: Trail elbow connection drill + shoulder flexibility routine',
      'Week 2: Continue elbow drill + add step drill for sequencing',
      'Week 3: Full swing with focus on lower body initiation',
      'Week 4: Integrate all changes + record new analysis',
    ],
  },
};

const sampleAnalysis2: SwingAnalysis = {
  overallScore: 58,
  modelAlignment: 'Model_2_CP',
  positionScores: [
    { position: 'P1', score: 6, deviations: ['ball_position_too_far_back', 'excessive_knee_flex'] },
    { position: 'P2', score: 7, deviations: ['minor_inside_takeaway'] },
    { position: 'P3', score: 6, deviations: ['flat_wrist_at_top', 'loss_of_spine_angle'] },
    { position: 'P4', score: 4, deviations: ['overturned_backswing', 'flying_trail_elbow', 'reverse_pivot_tendency'] },
    { position: 'P5', score: 5, deviations: ['hip_slide_excessive', 'early_extension'] },
    { position: 'P6', score: 5, deviations: ['steep_shaft', 'casting_lag'] },
    { position: 'P7', score: 6, deviations: ['cupped_lead_wrist', 'insufficient_shaft_lean'] },
    { position: 'P8', score: 6, deviations: ['early_arm_fold'] },
    { position: 'P9', score: 7, deviations: ['good_rotation'] },
    { position: 'P10', score: 7, deviations: [] },
  ],
  primaryFaults: [
    {
      fault: 'Reverse Pivot Tendency',
      positions: ['P4'],
      impact: 'Weight falls back on trail side; causes fat/thin contact and loss of power',
      severity: 'high',
      recommendedDrills: ['wall_pivot_drill', 'weight_transfer_drill'],
    },
    {
      fault: 'Early Extension',
      positions: ['P5', 'P6'],
      impact: 'Spine straightens toward ball; causes inconsistent contact and blocks hip rotation',
      severity: 'high',
      recommendedDrills: ['chair_drill', 'butt_against_wall_drill'],
    },
    {
      fault: 'Casting / Early Release',
      positions: ['P6', 'P7'],
      impact: 'Loss of lag angle; weak contact, loss of distance, inconsistent ball flight',
      severity: 'medium',
      recommendedDrills: ['lag_preservation_drill', 'pump_drill'],
    },
  ],
  rootCauseAnalysis: 'The reverse pivot tendency is the foundational issue. By allowing weight to shift backward during the backswing, the body creates a position from which it must compensate through early extension (thrusting hips toward the ball) to reach the ball. This early extension causes the shaft to steepen and the wrists to release early (casting), resulting in weak, inconsistent contact.',
  improvementPriorities: ['Weight transfer and pivot', 'Maintain spine angle', 'Preserve lag into impact'],
  model1Assessment: { compatibility: 'medium', reasoning: 'Trail-arm focus could help with lag but may worsen reverse pivot' },
  model2CPAssessment: { compatibility: 'high', reasoning: 'CP pattern with centered pivot focus addresses the root reverse pivot issue' },
  model2CFAssessment: { compatibility: 'low', reasoning: 'CF lateral shift would exacerbate early extension tendency' },
  practicePlan: {
    duration: '30_days',
    focusAreas: ['Proper weight transfer', 'Spine angle maintenance', 'Lag preservation'],
    weeklyStructure: [
      'Week 1: Weight transfer drill + wall pivot exercise',
      'Week 2: Chair drill for spine angle + continue weight transfer',
      'Week 3: Lag preservation pump drill + integrated practice',
      'Week 4: Full swing focus + record comparison analysis',
    ],
  },
};

const sampleAnalysis3: SwingAnalysis = {
  overallScore: 71,
  modelAlignment: 'Model_2_CF',
  positionScores: [
    { position: 'P1', score: 8, deviations: [] },
    { position: 'P2', score: 8, deviations: [] },
    { position: 'P3', score: 7, deviations: ['minor_across_the_line'] },
    { position: 'P4', score: 7, deviations: ['slight_flying_elbow'] },
    { position: 'P5', score: 7, deviations: ['minor_hip_slide'] },
    { position: 'P6', score: 7, deviations: ['slight_steepening'] },
    { position: 'P7', score: 8, deviations: [] },
    { position: 'P8', score: 8, deviations: [] },
    { position: 'P9', score: 7, deviations: ['minor_incomplete_rotation'] },
    { position: 'P10', score: 8, deviations: [] },
  ],
  primaryFaults: [
    {
      fault: 'Slight Flying Trail Elbow',
      positions: ['P4'],
      impact: 'Minor inconsistency in shot shape; occasional push or block',
      severity: 'low',
      recommendedDrills: ['towel_under_arm_drill'],
    },
    {
      fault: 'Minor Hip Slide',
      positions: ['P5'],
      impact: 'Slight loss of rotation; can lead to occasional hook with longer clubs',
      severity: 'low',
      recommendedDrills: ['rotation_focus_drill'],
    },
  ],
  rootCauseAnalysis: 'Overall solid mechanics with minor refinements needed. The slight flying trail elbow at the top is the most significant remaining fault, but it is relatively mild. The hip slide on the downswing is compensatory and will likely self-correct as the elbow position improves.',
  improvementPriorities: ['Trail elbow connection', 'Hip rotation vs slide'],
  model1Assessment: { compatibility: 'medium', reasoning: 'Good foundation but Model 1 trail-arm focus may disrupt current sequencing' },
  model2CPAssessment: { compatibility: 'medium', reasoning: 'Current CF pattern is working well; CP would require significant adjustment' },
  model2CFAssessment: { compatibility: 'high', reasoning: 'Current swing already shows CF characteristics with good results' },
  practicePlan: {
    duration: '14_days',
    focusAreas: ['Trail elbow discipline', 'Hip rotation refinement'],
    weeklyStructure: [
      'Week 1: Towel drill for elbow + rotation focus swings',
      'Week 2: Integration + record new analysis to verify improvement',
    ],
  },
};

// Demo swings
export const mockSwings: Swing[] = [
  {
    id: 'sw1',
    userId: '1',
    title: 'Driver Swing - July 1',
    faceOnVideoUrl: '/swing-faceon.jpg',
    downTheLineVideoUrl: '/swing-dtl.jpg',
    overallScore: 62,
    modelAlignment: 'Model_2_CP',
    analysisReport: sampleAnalysis1,
    processingStatus: 'completed',
    createdAt: '2026-07-01T14:30:00Z',
    userFeedback: 1,
  },
  {
    id: 'sw2',
    userId: '1',
    title: 'Iron Swing - June 20',
    faceOnVideoUrl: '/swing-faceon.jpg',
    downTheLineVideoUrl: '/swing-dtl.jpg',
    overallScore: 58,
    modelAlignment: 'Model_2_CP',
    analysisReport: sampleAnalysis2,
    processingStatus: 'completed',
    createdAt: '2026-06-20T10:15:00Z',
    userFeedback: 1,
  },
  {
    id: 'sw3',
    userId: '1',
    title: 'Driver Swing - June 5',
    faceOnVideoUrl: '/swing-faceon.jpg',
    downTheLineVideoUrl: '/swing-dtl.jpg',
    overallScore: 71,
    modelAlignment: 'Model_2_CF',
    analysisReport: sampleAnalysis3,
    processingStatus: 'completed',
    createdAt: '2026-06-05T09:00:00Z',
    userFeedback: 1,
  },
];

// Demo tips and drills
export const mockTipsDrills: TipDrill[] = [
  {
    id: 'td1',
    title: 'Trail Elbow Connection Drill (Towel)',
    description: 'Place a headcover or small towel under your trail armpit and hit half-swings (P1 to P4 and back) while keeping the towel in place. This forces your trail elbow to stay connected to your body throughout the backswing. Practice 20 repetitions daily.',
    category: 'drill',
    faultTags: ['flying_trail_elbow', 'over_the_top', 'loss_of_plane'],
    difficulty: 'beginner',
    equipmentNeeded: ['towel', 'club'],
    isActive: true,
  },
  {
    id: 'td2',
    title: '90-Degree Shoulder Turn Drill',
    description: 'Stand in your golf posture with a club across your chest. Rotate your shoulders until the club points behind the ball, targeting a 90-degree turn. Hold for 3 seconds, then release. Perform 15 reps daily to increase flexibility.',
    category: 'drill',
    faultTags: ['insufficient_shoulder_turn', 'loss_of_power'],
    difficulty: 'beginner',
    equipmentNeeded: ['club'],
    isActive: true,
  },
  {
    id: 'td3',
    title: 'Step Drill for Lower Body Initiation',
    description: 'Take your address position, then step your lead foot toward the target to initiate the downswing while keeping your shoulders and arms passive. This trains the correct sequencing: lower body first, upper body follows. Start with slow-motion practice swings, then progress to full speed.',
    category: 'drill',
    faultTags: ['upper_body_initiates', 'early_extension', 'reverse_pivot'],
    difficulty: 'intermediate',
    equipmentNeeded: ['club'],
    isActive: true,
  },
  {
    id: 'td4',
    title: 'Chair Drill for Spine Angle',
    description: 'Place a chair or alignment stick behind your buttocks at address. Throughout the swing, maintain contact with the chair/stick. This prevents early extension (standing up) and promotes proper hip rotation through impact.',
    category: 'drill',
    faultTags: ['early_extension', 'loss_of_spine_angle', 'inconsistent_contact'],
    difficulty: 'beginner',
    equipmentNeeded: ['chair', 'club'],
    isActive: true,
  },
  {
    id: 'td5',
    title: 'Lag Preservation Pump Drill',
    description: 'Take the club to P6 (shaft parallel on downswing) and pump the club up and down 3 times while maintaining the wrist angle. Then swing through to finish. This trains the feeling of preserving lag into impact.',
    category: 'drill',
    faultTags: ['casting', 'early_release', 'loss_of_lag'],
    difficulty: 'intermediate',
    equipmentNeeded: ['club'],
    isActive: true,
  },
  {
    id: 'td6',
    title: 'Understanding the Flat Left Wrist at Impact',
    description: 'The flat left wrist at impact (P7) is the single most important checkpoint in the MORAD system. A flat wrist creates forward shaft lean, which produces ball-first contact, compression, and consistent distance control. Practice hitting punch shots with a deliberate focus on keeping your lead wrist flat through impact.',
    category: 'tip',
    faultTags: ['scooping', 'cupped_lead_wrist', 'inconsistent_contact'],
    difficulty: 'beginner',
    equipmentNeeded: ['club', 'balls'],
    isActive: true,
  },
  {
    id: 'td7',
    title: 'Wall Pivot Drill for Weight Transfer',
    description: 'Stand with your back against a wall in golf posture. Practice your backswing while keeping your trail hip in contact with the wall. This prevents reverse pivot and trains proper weight distribution to the trail side at the top.',
    category: 'drill',
    faultTags: ['reverse_pivot', 'poor_weight_transfer', 'early_extension'],
    difficulty: 'beginner',
    equipmentNeeded: ['wall', 'club'],
    isActive: true,
  },
  {
    id: 'td8',
    title: '30-Day Model 2 CP Practice Plan',
    description: 'A structured 4-week practice plan designed to develop a consistent, controlled fade pattern using Model 2 CP (Centripetal Force) mechanics. Week 1 focuses on setup and takeaway, Week 2 on backswing positions, Week 3 on transition and downswing, Week 4 on integration and shot-shaping.',
    category: 'practice_plan',
    faultTags: ['general_improvement', 'model_2_cp_development'],
    difficulty: 'intermediate',
    equipmentNeeded: ['club', 'balls', 'alignment_sticks'],
    isActive: true,
  },
];

// Demo credit transactions
export const mockCreditTransactions: CreditTransaction[] = [
  { id: 'ct1', userId: '1', amount: 10, type: 'monthly_allocation', description: 'Monthly credit allocation', createdAt: '2026-07-01T00:00:00Z' },
  { id: 'ct2', userId: '1', amount: -1, type: 'swing_consumption', description: 'Swing analysis: Driver Swing - July 1', createdAt: '2026-07-01T14:30:00Z' },
  { id: 'ct3', userId: '1', amount: 2, type: 'bonus_grant', description: 'Welcome bonus credits', createdAt: '2026-06-15T10:00:00Z' },
  { id: 'ct4', userId: '1', amount: -1, type: 'swing_consumption', description: 'Swing analysis: Iron Swing - June 20', createdAt: '2026-06-20T10:15:00Z' },
  { id: 'ct5', userId: '1', amount: -1, type: 'swing_consumption', description: 'Swing analysis: Driver Swing - June 5', createdAt: '2026-06-05T09:00:00Z' },
];

// Helper functions for data access
export function getUserByEmail(email: string): User | undefined {
  return mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
}

export function getUserById(id: string): User | undefined {
  return mockUsers.find(u => u.id === id);
}

export function getSwingsByUserId(userId: string): Swing[] {
  return mockSwings.filter(s => s.userId === userId).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getSwingById(id: string): Swing | undefined {
  return mockSwings.find(s => s.id === id);
}

export function getAllUsers(): User[] {
  return mockUsers;
}

export function getAllSwings(): Swing[] {
  return mockSwings;
}

export function getTipsDrills(): TipDrill[] {
  return mockTipsDrills;
}

export function getCreditTransactions(userId: string): CreditTransaction[] {
  return mockCreditTransactions.filter(ct => ct.userId === userId);
}
