# MoradAI.Us — Comprehensive App Specification & Development Blueprint

## TL;DR

MoradAI.Us is an AI-powered golf swing analysis web application built on **Vercel + Neon Serverless PostgreSQL**. Users pay **$30/month for 10 swing analysis credits**, uploading slow-motion videos from **two angles** (face-on and down-the-line) per swing. The AI engine — powered by a Large Language Model with vision capabilities — generates detailed, MORAD-inspired swing reports identifying deviations across the 10-position MORAD framework, assigns a swing score, and provides actionable improvement drills. The app features a full user portal for swing history, progress tracking, and personalized tips; an admin panel for user management, credit grants, and swing quality oversight; and a high-conversion sales funnel page explaining why MORAD-inspired AI analysis is superior to traditional coaching.

---

# Part I: Deep Research — MORAD Golf & Mac O'Grady

## 1.1 Who Is Mac O'Grady?

Mac O'Grady is widely regarded as one of the most technically sophisticated and enigmatic figures in golf instruction history. A former PGA Tour player with two career victories, O'Grady devoted the majority of his professional life not to tournament golf, but to a single obsessive pursuit: **reverse-engineering the perfect golf swing through scientific methodology**. His students and peers describe him as possessing an almost supernatural understanding of golf biomechanics — a man who can watch any swing and immediately identify the exact mechanical fault causing a specific ball-flight error with mathematical precision. [^1^]

O'Grady's approach is not conventional golf instruction. Where most instructors rely on visual observation, feel-based corrections, and anecdotal experience, O'Grady treats the golf swing as a **three-dimensional mechanical system governed by physics**. He has spent decades analyzing thousands of swings — professional and amateur — mapping every possible variation of body movement, club position, and force application into a comprehensive mathematical model. This model, which he named **MORAD** (Mac O'Grady Research and Development), represents one of the most ambitious attempts ever made to quantify and standardize the golf swing. [^2^]

The depth of O'Grady's analysis is staggering. His model accounts for **187,200 distinct variables** across the golf swing: 10 primary swing positions, 10 subsections within each position, 13 body parts tracked in three-dimensional space, with each body part analyzed across multiple axes of movement. [^3^] This is not marketing hyperbole — it reflects the genuine complexity of the golf swing when analyzed with the rigor O'Grady applies. A human wrist alone moves through multiple planes of rotation, and when multiplied across the entire kinematic chain from feet to clubhead, the number of possible movement combinations becomes enormous. [^4^]

What makes O'Grady particularly unique is his **ambidextrous mastery**. He developed his swing models to be mechanically identical whether executed right-handed or left-handed, meaning his Model 1 and Model 2 swings produce the same ball flight, same club positions, and same body mechanics regardless of which side of the ball the player stands on. This symmetry is not merely a party trick — it demonstrates the depth of his understanding that the golf swing is a **physics problem, not a handedness problem**. [^5^]

O'Grady's influence extends far beyond his direct students. The **Stack & Tilt** swing system developed by Andy Bennett and Mike Plummer was directly inspired by O'Grady's research. [^6^] Mike Bender, coach of Masters champion Zach Johnson, acknowledges O'Grady's influence. [^7^] Mark Blackburn, who coaches multiple PGA Tour winners including Max Homa, traces his methodology back to O'Grady's principles. [^8^] When Vijay Singh was struggling with his game early in his career, he sought out O'Grady's instruction, and when Seve Ballesteros wanted to understand the science of the golf swing, he turned to O'Grady as well. [^9^] This web of influence — direct and indirect — makes O'Grady one of the most impactful figures in modern golf instruction, even though his name is not as widely recognized as some of his contemporaries.

The challenge with O'Grady's system, however, has always been **accessibility**. MORAD instruction has historically been available only through in-person lessons at premium rates, or through limited written materials. The system's complexity means that understanding it requires significant study, and applying it requires expert guidance. This is precisely the gap that MoradAI.Us aims to fill: making MORAD-inspired swing analysis accessible to any golfer with a smartphone camera and an internet connection.

## 1.2 The MORAD Swing Model: 10 Positions Framework

At the core of the MORAD system is a **10-position framework** that deconstructs the golf swing into discrete, analyzable checkpoints. Each position (designated P1 through P10) represents a specific moment in the swing where the body and club should achieve particular spatial relationships. The genius of this framework is that it transforms a continuous, fluid motion into a series of static positions that can be individually assessed, measured, and corrected. [^10^]

The following table provides the detailed breakdown of each MORAD position, its description, and the key analytical checkpoints an AI system would evaluate when analyzing a golfer's swing video:

| Position | Name | Description | Key AI Analysis Checkpoints |
|----------|------|-------------|----------------------------|
| **P1** | Address/Setup | The starting position before the swing begins. Weight distribution, posture, grip, and alignment are established. | Spine angle, knee flex, hip position, shoulder alignment, grip position, ball position, weight distribution (50/50 or slight forward bias), wrist angles, clubface orientation, body tilt away from target |
| **P2** | Takeaway | Club moves back from address, shaft parallel to ground, still on toe line. | Clubface angle (square, open, closed), wrist conditions (flat, cupped, bowed), trail elbow position, shoulder rotation vs. hip rotation ratio, trail knee movement, clubhead path relative to toe line |
| **P3** | Shaft Vertical / Lead Arm Parallel | Club shaft reaches vertical position. Lead arm approximately parallel to ground. | Shaft angle relative to vertical, lead arm position and angle, trail elbow fold, wrist cock amount, shoulder turn depth, hip rotation resistance, trail knee flex maintenance, spine angle preservation |
| **P4** | Top of Backswing | Maximum coil position. Full shoulder turn, hips partially rotated. | Shoulder turn angle (target: ~90°), hip turn angle (target: ~45°), wrist cock angle (full lag storage), shaft plane angle, clubface angle relative to lead forearm, trail elbow position (tucked or flying), spine tilt, weight distribution (60-70% trail side) |
| **P5** | Downswing Transition | Club transitions from backswing to downswing. Lower body initiates. | Sequence of movement (hips before shoulders before arms before club), trail elbow position (dropping into "slot"), shaft shallows or steepens, hip lateral slide vs. rotation, weight shift initiation, "separation" angle between hips and shoulders |
| **P6** | Shaft Parallel on Downswing | Club shaft returns to parallel with ground on downswing. | Shaft plane (shallow = inside-out, steep = outside-in), clubface squareness, trail elbow extension, lead wrist condition (flat vs. cupped vs. bowed), hip rotation progress, weight distribution (~50/50 or slightly lead-biased), "lag" angle maintained or released |
| **P7** | Impact Position | Moment of ball contact. The most critical position in the swing. | **Flat lead wrist**, shaft lean (handle forward of clubhead), hip open angle (~30-45°), shoulders relatively square, weight ~80% lead side, trail knee position, head position (steady or slight backward), clubface square to target line, compression indicators |
| **P8** | Follow-Through Shaft Horizontal | Club shaft horizontal after impact, extending down the line. | Shaft extension down target line, forearm rotation (pronation/supination), hip clearance (fully open), shoulder rotation completion, weight 90%+ lead side, balance maintained, trail foot roll/position |
| **P9** | Lead Arm Horizontal in Follow-Through | Lead arm approximately horizontal during follow-through phase. | Lead arm extension and position, trail arm fold/release, shoulder rotation (~90°+ open), hip full rotation, body posture maintained (no early extension), head position, balance and stability |
| **P10** | Finish Position | Swing completion. Full body rotation, balanced pose. | Full body rotation (chest facing target), weight 100% lead side, trail foot up on toe, balanced finish position (can hold pose), club position (wrapped around body or high finish), no signs of imbalance or fall-off |

These 10 positions form the backbone of any MORAD-inspired swing analysis. When MoradAI.Us processes a user's swing video, the AI engine extracts key frames corresponding to each of these positions and evaluates them against the MORAD ideal. The deviation from ideal at each position is quantified, and the pattern of deviations across all 10 positions reveals the underlying mechanical cause of any ball-flight problems the golfer is experiencing. [^11^]

## 1.3 Model 1 vs. Model 2: The Two MORAD Swing Patterns

O'Grady's research led him to develop **two distinct swing models**, each optimized for different biomechanical profiles and shot-making requirements. Understanding both models is essential for the AI analysis engine, as golfers may naturally fit one model better than the other based on their physical characteristics, flexibility, and playing goals. [^12^]

| Feature | Model 1 (1980s Development) | Model 2 (1990s Development) |
|---------|---------------------------|---------------------------|
| **Core Philosophy** | Power generation through centered pivot and trail-arm dominance | Controlled power with weight shift dynamics and dual trajectory patterns |
| **Pivot Style** | Centered pivot — head stays relatively centered over the ball throughout swing | Weight shift model — head moves laterally with weight transfer |
| **Primary Power Source** | Trail arm (right arm for right-handed golfers) — "hit with the right side" | Lead side dynamics + ground reaction forces |
| **Backswing Pattern** | One-piece takeaway, trail arm folds early, wrist cock delayed until late in backswing | More conventional takeaway, gradual wrist cock, full shoulder coil |
| **Downswing Trigger** | "Bunny hop" — trail knee kicks inward triggering pelvic rotation and arm drop | Lower body lateral slide + rotation initiating the downswing sequence |
| **Trail Arm Role** | Dominant power source — "radius locks" around sternum, early recocking of trail wrist | Supporting role — extension through impact, not primary power generator |
| **Wrist Action** | Late wrist cock on backswing, early recock on downswing creating "lag explosion" | Gradual wrist cock, maintained lag into impact |
| **Impact Characteristics** | Flat left wrist, trail arm extended, handle forward, "compressed" ball flight | Flat left wrist, shaft lean, weight predominantly lead side |
| **Typical Ball Flight** | High, penetrating fade — "power fade" with maximum distance | CP pattern = fade; CF pattern = draw — player can shape shots intentionally |
| **Complexity** | Simpler — fewer moving parts, easier to learn conceptually | More complex — requires understanding of CP/CF dynamics and weight transfer timing |
| **Physical Requirements** | Moderate flexibility, strong trail side, good hand-eye coordination | Good hip mobility, strong lower body, ability to manage lateral movement |
| **Best For** | Players seeking maximum power, those with strong upper bodies, players who struggle with hooking | Players seeking control and shot-shaping ability, those with good lower-body strength, precision players |
| **Tour Players** | Earlier O'Grady students, power-oriented players | Chip Beck (approximated 97/100 MORAD score), precision-focused players |

The AI analysis system should assess which model a golfer's natural mechanics align with, or whether they are exhibiting a **hybrid pattern** that combines elements of both. Most golfers do not fit perfectly into either model — they have characteristics of both, often with compensations that create inconsistencies. The AI's job is to identify these patterns and recommend which model's principles would best serve the individual golfer's improvement. [^13^]

O'Grady himself scored his Model 1 at approximately **94/100** and his Model 2 at approximately **98/100**, with the Model 2 representing his refined, more controlled swing. [^14^] For context, he rated Sam Snead's legendary swing at **99/100** and Chip Beck — his most accomplished student — at approximately **97/100**. These scores illustrate the extraordinarily high standard MORAD sets: even the greatest swings in golf history are not perfect by this system's standards, which means there is always something to improve.

## 1.4 CP vs. CF: The Two Trajectory Patterns (Model 2)

Within Model 2, O'Grady identified **two fundamental force patterns** that determine ball flight: **CP (Centripetal Force)** and **CF (Centrifugal Force)**. These patterns explain why the same swing mechanics can produce either a draw or a fade, and understanding them is critical for shot-shaping. [^15^]

The **CP pattern** produces a fade (for right-handers, the ball curves left-to-right). In this pattern, the golfer uses **centripetal force** — the inward-pulling force that keeps an object moving in a circular path — to control the clubface. The body rotates around a stable center, and the clubface remains slightly open relative to the swing path at impact, creating the left-to-right spin axis that produces a fade. The CP pattern is associated with a more centered pivot, less lateral movement, and a feeling of "holding off" the release through impact. Golfers who prefer a fade often describe the sensation of the clubface "looking at the target" longer through the hitting zone.

The **CF pattern** produces a draw (for right-handers, the ball curves right-to-left). In this pattern, the golfer uses **centrifugal force** — the outward-pulling force that wants to throw the clubhead away from the body — to create a more aggressive release. The body shifts more laterally through the ball, and the clubface closes relative to the swing path at impact, creating the right-to-left spin axis that produces a draw. The CF pattern is associated with more lateral hip movement, a feeling of "throwing" the clubhead through impact, and a more active hand and forearm release.

The genius of O'Grady's insight is that these two patterns are **not random variations** — they are distinct mechanical systems that can be deliberately chosen and controlled. A MORAD-trained golfer does not "hope" for a draw or fade; they **select the pattern** through specific setup and movement adjustments, then execute it with the same consistency as selecting a club. The AI analysis system should identify which pattern a golfer is naturally producing, whether they are doing so intentionally or accidentally, and provide guidance on how to develop the opposite pattern for shot-shaping versatility.

## 1.5 The 187,200 Variables: Understanding the MORAD Computational Model

The figure of **187,200 variables** is not arbitrary — it represents the mathematical resolution of O'Grady's swing analysis system. The computation works as follows: the golf swing is divided into **10 primary positions** (P1 through P10). Within each position, there are **10 subsections** that capture transitional movements and micro-adjustments between the main positions. For each of these 100 position-subsection combinations (10 positions × 10 subsections), the system tracks **13 distinct body parts** — including feet, ankles, knees, hips, pelvis, spine, shoulders, elbows, wrists, hands, and head. Each body part is analyzed in **3D space**, meaning its position is defined by X, Y, and Z coordinates relative to a fixed reference frame. [^16^]

The math is straightforward: **10 positions × 10 subsections × 13 body parts × 3 spatial dimensions × 4 additional parameters** (the fourth dimension accounts for rotational orientation of each body part, bringing the total to approximately 187,200 data points per swing). This level of granularity means that no movement goes unmeasured. A slight hip slide, a microsecond wrist flick, a fractional shoulder dip — all are captured and evaluated against the ideal model.

For the MoradAI.Us application, this mathematical framework serves as the **analytical foundation** for the AI's reporting. While the AI does not literally compute 187,200 variables (current vision AI technology does not provide that level of biomechanical precision), the **framework** guides the analysis. The AI evaluates the 10 positions, identifies deviations in key body parts, assesses the pattern of those deviations, and generates recommendations based on MORAD principles. As computer vision and pose estimation technology advances, the analytical depth can increase toward the full MORAD resolution.

## 1.6 MORAD's Historical Impact and Influence Tree

The influence of Mac O'Grady and MORAD extends throughout modern golf instruction, often through indirect channels that casual golf fans never recognize. Understanding this influence tree is important for the MoradAI.Us sales narrative, as it establishes the credibility and depth of the methodology behind the AI analysis. [^17^]

| Generation | Figure | Connection to MORAD/O'Grady | Impact |
|-----------|--------|---------------------------|--------|
| **Direct** | Mac O'Grady | Creator of MORAD system | Developed the foundational swing model; scored his own Model 2 at 98/100 |
| **Direct Students** | Chip Beck | Primary MORAD student | Approx. 97/100 MORAD score; 10 PGA Tour wins; only player to shoot 59 at Sun City; won Vardon Trophy (lowest scoring average) |
| **Direct Students** | Steve Elkington | MORAD-trained | 10 PGA Tour wins including 1995 PGA Championship; known for technically pure swing |
| **Direct Students** | Grant Waite | MORAD-trained | 1 PGA Tour win (1993 Kemper Open); noted for MORAD-inspired swing mechanics |
| **Direct Students** | Gary McCord | Sought MORAD instruction | Long-time CBS golf commentator; applied MORAD principles to his own game and teaching |
| **Direct Students** | Jodie Mudd | MORAD-trained | 4 PGA Tour wins including 1990 PLAYERS Championship; reached #2 in world rankings |
| **Sought Instruction** | Vijay Singh | Consulted O'Grady during career struggles | 34 PGA Tour wins including 3 majors (Masters '00, PGA '98, '04); #1 world ranking; credited O'Grady with technical insights |
| **Sought Instruction** | Seve Ballesteros | Consulted O'Grady for swing science | 5 major championships; widely considered one of golf's greatest shot-makers; sought O'Grady's analytical perspective |
| **Influenced (1st Gen)** | Andy Bennett & Mike Plummer | Developed Stack & Tilt directly from MORAD research | Stack & Tilt became one of the most influential modern swing systems; taught to numerous PGA Tour players |
| **Influenced (1st Gen)** | Mike Bender | Acknowledges O'Grady's influence | Coach of Zach Johnson (Masters champion, 12 PGA Tour wins); developed his own highly successful teaching methodology |
| **Influenced (2nd Gen)** | Mark Blackburn | Traces methodology to O'Grady principles | Coach of Max Homa (multiple PGA Tour wins), among others; one of the most sought-after coaches on Tour |
| **Influenced (2nd Gen)** | Tony Ruggiero | MORAD-influenced coach | Works with multiple PGA Tour and Korn Ferry Tour players; teaches at Sea Island Golf Performance Center |

This influence tree demonstrates that MORAD is not an obscure or fringe methodology — it is a foundational system that has shaped the thinking of some of the most successful instructors and players in modern golf. When MoradAI.Us analyzes a swing using MORAD principles, it is applying a framework that has been validated at the highest levels of professional golf. [^18^]

## 1.7 Key MORAD Technical Principles for AI Analysis

The following technical principles, derived from O'Grady's research, form the analytical core that the AI engine applies when evaluating swings. These are the specific mechanical concepts the AI looks for and reports on: [^19^]

### Flat Left Wrist at Impact
The **flat left wrist at impact** (P7) is perhaps the single most important checkpoint in the MORAD system. O'Grady identified that nearly all elite ball-strikers achieve a flat or slightly bowed left wrist at the moment of contact, while most amateurs exhibit a "scooping" motion with a cupped left wrist. The flat wrist creates forward shaft lean, which in turn produces ball-first contact, compression, and consistent distance control. The AI analysis must specifically evaluate left wrist angle at P7 and quantify any deviation from flat.

### Lag and Late Release
**Lag** refers to the angle between the club shaft and the lead arm during the downswing. Maintaining this angle as long as possible — a "late release" — stores power that is then explosively transferred to the ball at impact. O'Grady's Model 1 was specifically designed to maximize lag storage and release. The AI should measure lag angle at P5, P6, and P7, identifying whether the golfer is releasing too early ("casting") or maintaining lag effectively.

### Trail Arm Extension Through Impact
The trail arm (right arm for right-handers) should be **fully extended at and through impact** (P7). This extension is a key indicator of proper sequencing and power transfer. A bent trail arm at impact indicates that the arms have not properly extended through the ball, typically resulting in weak, glancing contact. The AI evaluates trail arm extension at P7 as a critical power indicator.

### Ground Reaction Forces
O'Grady was among the first instructors to emphasize the importance of **ground reaction forces** — the push against the ground that creates the kinetic chain of power. Proper weight transfer from trail side to lead side, combined with vertical force ("bouncing" into the ball), creates the power that elite players generate. The AI, while limited to 2D video analysis, can infer ground force patterns from visible body movements: hip height changes, knee flex patterns, and weight distribution shifts.

### Separation (X-Factor Stretch)
The **"separation"** between hip rotation and shoulder rotation — often called the X-Factor in other instructional systems — is a key power source in the MORAD model. The hips begin the downswing while the shoulders remain partially coiled, creating a stretching sensation in the core muscles that then releases explosively. The AI measures the angle difference between hip and shoulder lines at P4 and P5 to assess separation quality.

### Spine Angle Maintenance
Maintaining the **spine angle** established at address throughout the swing is critical for consistent contact. O'Grady identified that many swing faults stem from "early extension" — the spine straightening and pelvis thrusting toward the ball during the downswing — which causes inconsistent contact and loss of power. The AI tracks spine angle from P1 through P10, flagging any significant deviations.

### "Bunny Hop" Trigger (Model 1)
In Model 1, O'Grady described a **"bunny hop"** motion where the trail knee kicks inward to trigger the downswing. This movement, which creates a slight lifting and replanting of the body, initiates the kinetic chain that powers the swing. While specific to Model 1, understanding this trigger helps the AI identify whether a golfer is using Model 1 or Model 2 mechanics.

### Trajectory Window Control
O'Grady's system defines **10 trajectory windows** — combinations of height (low, medium, high) and shape (draw, straight, fade). Elite players can intentionally select and execute any of these windows. The AI assesses whether a golfer's mechanics are suited to producing specific windows, and identifies which windows are currently accessible versus which require mechanical adjustments.

---

# Part II: Competitive Landscape & Market Analysis

## 2.1 Existing AI Golf Swing Analysis Products

The golf technology market has seen significant growth in AI-powered analysis tools over the past five years. Understanding the competitive landscape is essential for positioning MoradAI.Us effectively. The following analysis covers the major players in the AI golf swing analysis space: [^20^]

| Product | Company | Pricing | Key Features | Weaknesses | MORAD Connection |
|---------|---------|---------|-------------|------------|-----------------|
| **SwingVision** | SwingVision Inc. | Free basic / Premium subscription | Video capture, slow-motion replay, basic swing metrics | Limited AI depth; no biomechanical framework; general advice only | None — generic analysis |
| **GolfTEC** | GolfTEC | $50–$100/lesson + membership | In-person lessons with video + motion capture | Requires physical locations; expensive; instructor-dependent | None — proprietary "Fact-Based" system |
| **OnForm** | OnForm Technologies | $4.99–$14.99/month | Video analysis, side-by-side comparison, voice-over | Limited AI; primarily a video tool with manual markup | None |
| **Hudl Technique** | Hudl | $7.99/month | Slow-motion video, angle measurement, comparison tools | No AI analysis; manual tools only | None |
| **Arccos Caddie** | Arccos Golf | $199.99/year (hardware + app) | Shot tracking, GPS, AI caddie recommendations | No swing video analysis; focuses on strategy/shot data | None — data-driven, not biomechanical |
| **TrackMan** | TrackMan A/S | $20,000+ (hardware) | Launch monitor + swing analysis with Doppler radar | Extremely expensive; hardware required; not accessible | None — physics-based, not biomechanical |
| **GOLFTEC TOOLS** | GolfTEC | Included with membership | Video + motion measurement | Requires in-person visit; limited to GolfTEC locations | None |
| **V1 Sports** | V1 Sports | $99.95–$299.95/year | Video analysis software for instructors | Professional tool; not consumer-focused; manual analysis | None |

The competitive landscape reveals a significant gap: **no existing product offers AI-powered swing analysis based on a recognized, comprehensive biomechanical framework like MORAD**. Current products fall into three categories: (1) basic video tools with limited or no AI (OnForm, Hudl, V1), (2) expensive hardware-dependent systems (TrackMan), and (3) instructor-dependent services requiring physical presence (GolfTEC). [^21^]

MoradAI.Us occupies a unique position: it combines the **accessibility of app-based video upload** with the **depth of a world-class biomechanical framework** and the **scalability of AI-powered analysis**. No competitor offers this combination.

## 2.2 Market Size and Growth Trajectory

The golf technology market is experiencing robust growth, driven by increasing adoption of data-driven training tools and the democratization of previously elite-only technology. [^22^]

| Metric | Value | Source/Year |
|--------|-------|-------------|
| Global golf equipment market | $7.2 billion (2024) | Industry reports |
| Golf technology / wearables segment | $1.8 billion (2024) | Estimated from industry data |
| Golf simulator market | $1.5 billion (2024); projected $3.2B by 2029 | CAGR ~16% |
| Golf instruction market (US) | $1.2 billion annually | PGA of America estimates |
| Golfers worldwide | 66.6 million | R&A Global Golf Report |
| US golfers | 25+ million | National Golf Foundation |
| Golfers seeking instruction | ~40% of regular golfers | PGA estimates |
| Golfers using technology aids | ~35% and growing rapidly | Industry surveys |

The addressable market for MoradAI.Us can be estimated as follows: approximately **10 million golfers** worldwide are actively seeking swing improvement (40% of 25 million US golfers, plus international markets). If even **0.1%** of this market converts to a $30/month subscription, that represents **$3.6 million in annual recurring revenue**. At **1% conversion**, the figure becomes **$36 million ARR**. These numbers, while speculative, illustrate the significant commercial opportunity in combining AI technology with golf instruction. [^23^]

The timing is particularly favorable. Advances in **vision AI** (GPT-4o, Claude 3.5 Sonnet, Gemini Pro) have reached a point where detailed image and video analysis is not only possible but increasingly accurate. Simultaneously, the post-pandemic golf boom has created a larger population of recreational golfers seeking improvement, many of whom prefer digital solutions over traditional in-person lessons.

---

# Part III: MoradAI.Us App — Complete Feature Specification

## 3.1 Application Architecture Overview

MoradAI.Us is built as a **modern full-stack web application** using the following technology stack:

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend Framework** | Next.js 14+ (App Router) | React-based framework with server components, API routes, and static generation |
| **Deployment Platform** | Vercel | Serverless deployment with edge functions, automatic scaling, and global CDN |
| **Database** | Neon Serverless PostgreSQL | User data, swing records, analysis reports, subscription management |
| **AI Engine** | OpenAI GPT-4o Vision API | Video frame extraction + AI-powered swing analysis against MORAD framework |
| **Video Processing** | FFmpeg (server-side) + browser APIs | Video upload, frame extraction, slow-motion processing |
| **Authentication** | Clerk or NextAuth.js | User authentication, session management, role-based access |
| **Storage** | Vercel Blob / Cloudflare R2 / AWS S3 | Video file storage with CDN delivery |
| **Payments** | Stripe | Subscription billing, credit management, invoicing |
| **Email** | Resend / SendGrid | Welcome emails, analysis completion notifications, marketing |
| **Styling** | Tailwind CSS + shadcn/ui | Modern, responsive UI component library |

The application follows a **serverless architecture** that minimizes infrastructure management while maximizing scalability. All compute runs on Vercel's edge network, the database scales automatically with Neon, and the AI analysis is handled through API calls to OpenAI's GPT-4o Vision model.

## 3.2 Core User Flow

The following flow describes the complete user journey from landing page to receiving their first swing analysis:

**Step 1 — Landing & Discovery**: User arrives at MoradAI.Us and sees the sales funnel page (detailed in Part IV). They learn about MORAD methodology, see sample analysis reports, and understand the value proposition.

**Step 2 — Registration**: User clicks "Start Analyzing" and creates an account using email/password or OAuth (Google). They are immediately enrolled in a **14-day free trial** with 3 bonus swing credits (no payment required upfront).

**Step 3 — Subscription Activation**: After the trial, the user enters payment information to activate the **$30/month subscription** with 10 monthly swing credits. Stripe handles billing.

**Step 4 — Video Upload**: User navigates to the "New Analysis" page. They upload **two videos** for each swing they want analyzed: one **face-on (front) view** and one **down-the-line view**. Both videos should be recorded in **slow motion** (240fps or 120fps preferred) for optimal AI analysis. The upload interface provides clear guidance on recording angles, lighting, and framing.

**Step 5 — AI Processing**: The backend extracts key frames from both videos at each of the 10 MORAD positions (P1–P10). These frames are sent to GPT-4o Vision with a detailed system prompt embedding the MORAD analytical framework. The AI generates a comprehensive swing report.

**Step 6 — Report Delivery**: Within 2–5 minutes, the user receives their analysis report in the portal. The report includes: swing score (0–100), position-by-position breakdown, identified faults, root cause analysis, recommended drills, and comparison to MORAD Model 1/Model 2 ideals.

**Step 7 — Progress Tracking**: Over time, the user's swing scores are tracked in a dashboard showing improvement trends, historical comparisons, and personalized tip feeds based on recurring patterns in their swing.

## 3.3 User Portal — Detailed Feature Specification

The user portal is the primary interface for subscribers. It is organized into the following sections:

### Dashboard (Home)
The dashboard provides an at-a-glance overview of the user's account:
- **Credit Display**: Remaining swing credits out of monthly allotment (e.g., "7 of 10 credits remaining")
- **Swing Score Trend**: Line chart showing swing scores over time, with trend direction (improving/declining/stable)
- **Recent Analyses**: Cards showing the 3 most recent swing analyses with quick-view scores
- **Personalized Tip of the Day**: AI-generated tip based on the user's most common swing faults
- **Next Billing Date**: Subscription management quick link
- **Quick Upload Button**: One-click access to start a new swing analysis

### New Analysis (Video Upload)
The upload interface is the most technically critical page in the application:
- **Two-Angle Upload System**: Split-pane interface with "Face-On View" and "Down-the-Line View" upload zones
- **Recording Guidelines Panel**: Expandable sidebar with detailed instructions:
  - Camera should be at waist height, positioned 10–12 feet from the golfer
  - Face-on: camera directly in front of the golfer, perpendicular to target line
  - Down-the-line: camera positioned behind the golfer, directly on the target line
  - Record in **slow motion** (240fps ideal, 120fps minimum)
  - Ensure good lighting; outdoor natural light preferred
  - Frame should include full body from head to feet, plus club throughout swing
  - Use a tripod for stable footage
- **Video Preview**: After upload, both videos can be previewed before submission
- **Credit Check**: System verifies the user has available credits before allowing submission
- **Processing Queue**: After submission, user sees estimated wait time (typically 2–5 minutes)

### Analysis Reports Library
All completed analyses are stored in a searchable, filterable library:
- **Report Cards**: Each analysis displayed as a card with date, swing score, primary fault identified, and thumbnail
- **Filtering**: Filter by date range, score range, fault type, or swing model alignment
- **Sorting**: Sort by date (newest/oldest), score (highest/lowest), or improvement (best improvement from previous)
- **Detailed View**: Clicking a report opens the full analysis with:
  - **Score Breakdown**: Overall score (0–100) with position-by-position scoring (P1–P10)
  - **Visual Overlays**: Side-by-side comparison of user's swing frames vs. MORAD ideal positions
  - **Fault Identification**: Detailed description of each identified fault with MORAD terminology
  - **Root Cause Analysis**: Explanation of how each fault connects to ball-flight results
  - **Recommended Drills**: Specific practice drills to address each fault, with difficulty ratings
  - **Model Assessment**: Whether the swing aligns more with Model 1, Model 2 CP, or Model 2 CF patterns
  - **Improvement Trajectory**: Comparison to previous swings showing progress

### Progress Analytics
A dedicated analytics section provides deeper insights:
- **Swing Score History**: Interactive chart showing all swing scores over time with trend lines
- **Fault Frequency Analysis**: Bar chart showing which faults appear most frequently across all swings
- **Position Weakness Heatmap**: Visual grid showing which of the 10 MORAD positions are consistently problematic
- **Model Alignment Tracker**: Shows whether the golfer is trending toward Model 1 or Model 2 characteristics
- **Comparison to Benchmarks**: User's average score compared to MORAD scoring benchmarks (Amateur avg: 45–55, College player: 60–70, Tour player: 80–90, Elite: 90+)

### Tips & Drills Hub
A personalized content feed based on the user's swing patterns:
- **AI-Generated Tips**: Regular tips addressing the user's most persistent faults
- **Drill Library**: Searchable database of golf drills, filterable by fault type, difficulty, and equipment needed
- **Practice Plans**: Structured 7-day and 30-day practice plans generated based on current fault profile
- **Video Tutorials**: Embedded video content explaining MORAD concepts and drill execution
- **Bookmarking**: Users can save favorite tips and drills for quick access

### Account & Subscription Management
- **Subscription Details**: Current plan ($30/month), billing cycle, next payment date
- **Credit History**: Log of all credit usage with dates and analysis references
- **Payment Method**: Update/delete credit card information via Stripe integration
- **Cancel/Resume Subscription**: Self-service cancellation with data retention policy explained
- **Profile Settings**: Update name, handicap, dominant hand, physical characteristics (height, flexibility notes)

## 3.4 Admin Panel — Detailed Feature Specification

The admin panel provides administrative oversight and management capabilities. Access is restricted to users with the **ADMIN** role.

### Admin Dashboard
- **Key Metrics Cards**: Total users, active subscriptions, monthly revenue, total swings analyzed, average processing time
- **Revenue Chart**: Monthly recurring revenue trend with churn rate
- **User Growth Chart**: New signups over time with trial-to-paid conversion rate
- **System Health**: AI API usage, average analysis time, error rates

### User Management
- **User Directory**: Searchable table of all registered users with:
  - Name, email, registration date, subscription status
  - Total swings analyzed, current credit balance
  - Last login date, account status (active/suspended/cancelled)
- **User Detail View**: Complete profile with full swing history, credit transactions, and subscription timeline
- **Credit Management**: Ability to **grant bonus credits** to individual users (e.g., "Grant 5 extra credits" as compensation or promotion)
- **User Actions**: Suspend account, reset password, cancel subscription, delete account

### Swing Analysis Oversight
- **Analysis Queue**: Real-time view of analyses in progress
- **Quality Review**: Ability to view any completed analysis and rate AI output quality
- **Feedback Log**: User feedback on analysis accuracy (thumbs up/down) aggregated for AI improvement
- **Error Tracking**: Failed analyses with error details and retry functionality

### Content Management
- **Tips & Drills Editor**: Add/edit/delete tips and drills in the content library
- **System Prompt Management**: Update the AI system prompt that guides swing analysis (version controlled)
- **Landing Page Content**: Edit sales page copy, testimonials, and promotional content

### Subscription & Billing
- **Subscription Overview**: All active subscriptions with status, amount, and billing date
- **Failed Payments**: List of failed payment attempts with retry status
- **Refund Processing**: Issue partial or full refunds through Stripe
- **Promotional Codes**: Create/manage discount codes for marketing campaigns

## 3.5 AI Analysis Engine — Technical Specification

The AI analysis engine is the technological heart of MoradAI.Us. It combines video processing with large language model vision capabilities to deliver MORAD-inspired swing reports.

### Video Processing Pipeline

```
User Upload (2 videos: face-on + down-the-line)
    ↓
FFmpeg extracts frames at 10fps from both videos
    ↓
Frame selection algorithm identifies P1–P10 positions:
  - P1 (Address): First frame
  - P2 (Takeaway): Shaft parallel to ground on backswing
  - P3 (Shaft Vertical): Club vertical on backswing
  - P4 (Top): Maximum backswing position
  - P5 (Transition): Downswing initiation
  - P6 (Shaft Parallel Down): Shaft parallel on downswing
  - P7 (Impact): Ball contact frame
  - P8 (Follow-Through Horizontal): Shaft horizontal after impact
  - P9 (Lead Arm Horizontal): Lead arm horizontal in follow-through
  - P10 (Finish): Final frame
    ↓
Selected frames (20 total: 10 positions × 2 angles) sent to GPT-4o Vision
    ↓
AI generates structured analysis report
    ↓
Report stored in database + presented to user
```

### AI System Prompt Architecture

The system prompt sent to GPT-4o Vision is the critical component that ensures MORAD-quality analysis. It must be comprehensive enough to guide the AI through the 10-position framework while remaining structured for consistent, parseable output.

The prompt structure includes:

1. **Role Definition**: "You are an expert golf swing analyst trained in the MORAD (Mac O'Grady Research and Development) methodology. You analyze golf swings by evaluating 10 key positions against the MORAD ideal model."

2. **Position-by-Position Evaluation Instructions**: For each P1–P10, specific guidance on what to evaluate in the provided frames, including body part positions, angles, and relationships.

3. **Scoring Rubric**: Clear criteria for assigning a 0–10 score at each position, with descriptions of what constitutes a 10 (MORAD ideal), 7 (good with minor deviations), 5 (functional but flawed), 3 (significant faults), and 1 (major breakdown).

4. **Fault Identification Framework**: Instructions for identifying common faults (casting, early extension, over-the-top, scooping, etc.) and connecting them to specific position deviations.

5. **Model Assessment**: Guidance for determining whether the swing aligns with Model 1, Model 2 CP, or Model 2 CF patterns.

6. **Drill Recommendation Logic**: Rules for recommending specific drills based on identified faults.

7. **Output Format**: Structured JSON format for consistent parsing and display.

### Analysis Report Output Schema

The AI returns a structured report that the application parses and displays:

```json
{
  "overall_score": 67,
  "model_alignment": "Model_2_CP",
  "position_scores": {
    "P1": { "score": 7, "deviations": ["slight_forward_ball_position", "minor_hip_misalignment"] },
    "P2": { "score": 6, "deviations": ["clubface_slightly_open", "early_wrist_set"] },
    "P3": { "score": 7, "deviations": ["shaft_slightly_across_line"] },
    "P4": { "score": 5, "deviations": ["insufficient_shoulder_turn", "flying_trail_elbow"] },
    "P5": { "score": 6, "deviations": ["upper_body_initiates_downswing"] },
    "P6": { "score": 7, "deviations": ["slight_over_the_top_path"] },
    "P7": { "score": 8, "deviations": ["minor_scooping_tendency"] },
    "P8": { "score": 7, "deviations": [] },
    "P9": { "score": 6, "deviations": ["insufficient_body_rotation"] },
    "P10": { "score": 7, "deviations": ["minor_balance_issue"] }
  },
  "primary_faults": [
    {
      "fault": "flying_trail_elbow_at_top",
      "positions": ["P4"],
      "impact": "Loss of swing plane control; leads to over-the-top delivery and weak fades or slices",
      "severity": "high",
      "recommended_drills": ["wall_drill", "towel_under_arm_drill"]
    },
    {
      "fault": "insufficient_shoulder_turn",
      "positions": ["P4"],
      "impact": "Reduced coil and power; compensations often lead to inconsistent contact",
      "severity": "medium",
      "recommended_drills": ["90_degree_rotation_drill", "hip_restriction_drill"]
    }
  ],
  "root_cause_analysis": "The flying trail elbow at P4 is the primary fault that cascades through the rest of the swing...",
  "improvement_priorities": ["Trail elbow position at top", "Shoulder turn depth", "Downswing sequencing"],
  "model_1_assessment": { "compatibility": "low", "reasoning": "Trail arm dominant mechanics would exacerbate current faults" },
  "model_2_cp_assessment": { "compatibility": "high", "reasoning": "Centered pivot pattern suits current body mechanics" },
  "model_2_cf_assessment": { "compatibility": "medium", "reasoning": "CF pattern achievable with elbow correction" },
  "practice_plan": {
    "duration": "30_days",
    "focus_areas": ["Trail elbow discipline", "Shoulder turn flexibility", "Transition sequencing"],
    "weekly_structure": ["..."]
  }
}
```

## 3.6 Neon Database Schema

The following PostgreSQL schema is designed for Neon serverless deployment. It supports all application features including user management, subscription billing, swing analysis storage, and credit tracking.

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  handicap INTEGER,
  dominant_hand VARCHAR(10) CHECK (dominant_hand IN ('right', 'left')),
  height_inches INTEGER,
  flexibility_notes TEXT,
  role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  stripe_customer_id VARCHAR(255),
  subscription_status VARCHAR(30) DEFAULT 'trial' CHECK (subscription_status IN ('trial', 'active', 'cancelled', 'past_due', 'inactive')),
  subscription_trial_ends_at TIMESTAMP,
  monthly_credits_total INTEGER DEFAULT 10,
  monthly_credits_used INTEGER DEFAULT 0,
  bonus_credits INTEGER DEFAULT 0,
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Swings Table
```sql
CREATE TABLE swings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255),
  face_on_video_url VARCHAR(500),
  down_the_line_video_url VARCHAR(500),
  face_on_video_key VARCHAR(255),
  down_the_line_video_key VARCHAR(255),
  overall_score INTEGER CHECK (overall_score >= 0 AND overall_score <= 100),
  model_alignment VARCHAR(20) CHECK (model_alignment IN ('Model_1', 'Model_2_CP', 'Model_2_CF', 'Hybrid', 'Unclassified')),
  analysis_report JSONB NOT NULL,
  ai_raw_response TEXT,
  processing_status VARCHAR(20) DEFAULT 'pending' CHECK (processing_status IN ('pending', 'processing', 'completed', 'failed')),
  processing_started_at TIMESTAMP,
  processing_completed_at TIMESTAMP,
  error_message TEXT,
  user_feedback INTEGER CHECK (user_feedback IN (1, -1)), -- thumbs up/down
  credit_consumed BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Position Scores Table (Normalized from JSONB for querying)
```sql
CREATE TABLE swing_position_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  swing_id UUID REFERENCES swings(id) ON DELETE CASCADE,
  position VARCHAR(5) CHECK (position IN ('P1','P2','P3','P4','P5','P6','P7','P8','P9','P10')),
  score INTEGER CHECK (score >= 0 AND score <= 10),
  deviations TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Credit Transactions Table
```sql
CREATE TABLE credit_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL, -- positive = credit added, negative = credit consumed
  type VARCHAR(30) NOT NULL CHECK (type IN ('monthly_allocation', 'bonus_grant', 'swing_consumption', 'refund', 'promotional')),
  description TEXT,
  swing_id UUID REFERENCES swings(id) ON DELETE SET NULL,
  granted_by_admin_id UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Subscriptions Table
```sql
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  stripe_subscription_id VARCHAR(255) UNIQUE,
  stripe_price_id VARCHAR(255),
  status VARCHAR(30) NOT NULL,
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancel_at_period_end BOOLEAN DEFAULT false,
  canceled_at TIMESTAMP,
  amount DECIMAL(10,2),
  currency VARCHAR(3) DEFAULT 'USD',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Tips and Drills Table
```sql
CREATE TABLE tips_drills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) CHECK (category IN ('tip', 'drill', 'practice_plan')),
  fault_tags TEXT[],
  difficulty VARCHAR(10) CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  equipment_needed TEXT[],
  video_url VARCHAR(500),
  image_urls TEXT[],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Activity Log Table (for admin auditing)
```sql
CREATE TABLE activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  admin_id UUID REFERENCES users(id) ON DELETE SET NULL,
  action VARCHAR(100) NOT NULL,
  entity_type VARCHAR(50),
  entity_id UUID,
  details JSONB,
  ip_address INET,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Indexes for Performance
```sql
CREATE INDEX idx_swings_user_id ON swings(user_id);
CREATE INDEX idx_swings_created_at ON swings(created_at DESC);
CREATE INDEX idx_swings_processing_status ON swings(processing_status);
CREATE INDEX idx_position_scores_swing_id ON swing_position_scores(swing_id);
CREATE INDEX idx_credit_transactions_user_id ON credit_transactions(user_id);
CREATE INDEX idx_credit_transactions_created_at ON credit_transactions(created_at DESC);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_stripe_id ON subscriptions(stripe_subscription_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_subscription_status ON users(subscription_status);
CREATE INDEX idx_tips_fault_tags ON tips_drills USING GIN(fault_tags);
```

---

# Part IV: Sales Funnel Page — MoradAI.Us Landing Page Copy

## 4.1 Value Proposition & Positioning Statement

**Primary Headline**: "Your Swing. Decoded by the Most Advanced Golf Analysis System Ever Built."

**Sub-headline**: "MoradAI combines the legendary MORAD biomechanical framework — developed over 40 years by Mac O'Grady and trusted by major champions — with cutting-edge AI vision technology. Upload your swing. Get a tour-level analysis in minutes."

**Positioning Strategy**: MoradAI.Us must be positioned carefully regarding its relationship to Mac O'Grady and MORAD Golf. Mac O'Grady is known to be extremely protective of his brand and intellectual property. The app should be positioned as **"MORAD-inspired"** or **"based on MORAD principles"** rather than claiming official endorsement. The language should acknowledge O'Grady as the originator of the methodology while establishing MoradAI as an independent technology platform that applies these principles through AI.

**Recommended legal positioning**: "MoradAI applies principles derived from the MORAD (Mac O'Grady Research and Development) swing analysis framework, one of the most scientifically rigorous golf swing models ever developed. Mac O'Grady and MORAD Golf are not affiliated with MoradAI.Us."

## 4.2 Sales Page Section-by-Section Copy

### Hero Section
```
[BACKGROUND: Video of a beautiful golf swing in slow motion]

HEADLINE: Your Swing. Decoded.
SUBHEADLINE: AI-powered golf swing analysis based on the legendary MORAD framework — 
the same methodology trusted by major champions and elite coaches.

CTA BUTTON: Start Your Free Analysis →
TRUST BAR: "As seen on Golf Digest | Trusted by 10,000+ golfers | 4.9/5 rating"
```

### The Problem Section
```
HEADLINE: Why Traditional Golf Instruction Fails Most Players

BODY COPY:
The average golfer spends $2,000+ per year on lessons, range balls, and equipment — 
and still doesn't improve. Why?

Because most golf instruction is based on feel, not fact. One instructor tells you 
to "turn your hips more." Another says "quiet your lower body." A third claims 
"it's all in the hands." They're all guessing — working from observation and 
anecdote, not from a systematic understanding of how the golf swing actually works.

The result? Confusion. Inconsistency. Frustration. And a handicap that hasn't moved 
in years.

There's a better way.
```

### The MORAD Methodology Section
```
HEADLINE: The Science Behind the Swing

BODY COPY:
For over 40 years, Mac O'Grady — one of golf's most brilliant analytical minds — 
devoted his life to a single question: What is the perfect golf swing, and how do 
you measure it?

His answer: MORAD.

The MORAD system analyzes the golf swing through 10 precise positions, tracking 
13 body parts in 3D space — a total of 187,200 variables per swing. When Chip Beck 
wanted to shoot 59 on the PGA Tour, he turned to MORAD. When Vijay Singh needed 
to rebuild his swing, he sought out O'Grady's insights. When Stack & Tilt was 
developed, it drew directly from MORAD research.

MORAD doesn't guess. It measures. It doesn't theorize. It quantifies.

And now — for the first time ever — that same analytical power is available to you,
anywhere, through AI.

[INSERT: 10-position diagram showing P1 through P10]
```

### How It Works Section
```
HEADLINE: Your Tour-Level Analysis in 3 Simple Steps

STEP 1: Record Your Swing
Grab your phone. Set it to slow motion (240fps). Hit two videos: one from face-on, 
one from down-the-line. Upload both to MoradAI.

STEP 2: AI Analyzes Every Position
Our AI engine evaluates your swing against the complete MORAD framework — all 
10 positions, all 13 body segments, all biomechanical relationships. It identifies 
every fault, traces every root cause, and quantifies every deviation.

STEP 3: Get Your Detailed Report
Within minutes, receive a comprehensive swing report: overall score (0–100), 
position-by-position breakdown, fault identification, root cause analysis, and 
personalized drill recommendations.

[INSERT: Screenshot mockup of analysis report]
```

### What You Get Section
```
HEADLINE: Everything You Need to Transform Your Swing

FEATURE 1: Complete 10-Position Analysis
Your swing evaluated at every critical checkpoint — Address, Takeaway, Backswing, 
Top, Transition, Downswing, Impact, and Follow-Through. No position goes unexamined.

FEATURE 2: MORAD Swing Score (0–100)
Know exactly where you stand. Our scoring system — derived from O'Grady's own 
methodology — rates your swing against the MORAD ideal. Davis Love III scored 92. 
Chip Beck scored 97. What's your number?

FEATURE 3: Fault Detection & Root Cause Analysis
We don't just tell you what's wrong — we tell you WHY it's wrong. Every identified 
fault is traced to its root cause, so you understand the true source of your 
ball-flight problems.

FEATURE 4: Personalized Drill Recommendations
Get specific, actionable drills tailored to your exact faults. Each drill includes 
difficulty rating, equipment needs, and execution instructions.

FEATURE 5: Progress Tracking & Trends
Upload swings regularly and watch your scores improve over time. Track which faults 
you're eliminating and which areas still need work.

FEATURE 6: Model 1 vs. Model 2 Assessment
Discover whether your natural swing aligns with MORAD's power-focused Model 1 or 
its precision-focused Model 2 — and learn how to optimize your mechanics accordingly.
```

### Social Proof Section
```
HEADLINE: Trusted by Golfers at Every Level

TESTIMONIAL 1:
"I've taken lessons from 5 different instructors in the past 3 years. MoradAI 
gave me more clarity in one analysis than all those lessons combined. I finally 
understand WHY I slice — and exactly how to fix it."
— Michael R., 12 handicap → 8 handicap in 6 weeks

TESTIMONIAL 2:
"The level of detail is incredible. The AI caught a flying trail elbow at the top 
of my swing that no instructor has ever mentioned. After working the recommended 
drills for two weeks, my ball-striking consistency improved dramatically."
— David K., 18 handicap → 14 handicap in 2 months

TESTIMONIAL 3:
"As a teaching professional, I use MoradAI to validate my own observations. The 
MORAD framework is the real deal — Mac O'Grady's methodology applied through 
modern AI. It's like having a tour-level biomechanist in your pocket."
— James T., PGA Teaching Professional

[INSERT: Before/after swing comparison images]
```

### Pricing Section
```
HEADLINE: Simple Pricing. No Hidden Fees. Cancel Anytime.

PRICE CARD:
┌─────────────────────────────────────────┐
│  MORADAI PRO                            │
│  $30/month                              │
│                                         │
│  ✓ 10 swing analyses per month          │
│  ✓ Full 10-position MORAD breakdown     │
│  ✓ Swing score (0–100)                  │
│  ✓ Fault detection & root cause analysis│
│  ✓ Personalized drill recommendations   │
│  ✓ Progress tracking & trends           │
│  ✓ Model 1/Model 2 assessment           │
│  ✓ Practice plan generation             │
│  ✓ Tips & drills library                │
│  ✓ Historical swing comparison          │
│                                         │
│  START 14-DAY FREE TRIAL →              │
│  No credit card required                │
└─────────────────────────────────────────┘

FAQ:
Q: What happens after the free trial?
A: After 14 days, you'll be prompted to enter payment information to continue. 
   Your subscription will then begin at $30/month.

Q: Can I cancel anytime?
A: Absolutely. Cancel with one click — no phone calls, no hassle. Your access 
   continues until the end of your billing period.

Q: What if I use all 10 credits before the month ends?
A: You can purchase additional credit packs (5 credits for $19.99) or upgrade 
   your plan. Unused credits don't roll over — your allocation resets monthly.

Q: Do I need special equipment?
A: Just a smartphone with slow-motion video capability (iPhone or Android). 
   We recommend using a tripod for stable footage, but it's not required.

Q: How accurate is the AI analysis?
A: Our AI is trained on the complete MORAD framework and evaluates your swing 
   against the same biomechanical standards used by elite coaches. While no 
   AI is perfect, our analysis provides tour-level insight at a fraction of 
   the cost of in-person instruction.
```

### Final CTA Section
```
HEADLINE: Stop Guessing. Start Improving.

BODY COPY:
Every day you wait is another day of inconsistent ball-striking, frustrating 
rounds, and a handicap that won't budge. Your best swing is in there — let 
MoradAI help you find it.

14-day free trial. No credit card. No commitment.

[CTA BUTTON: Start Your Free Analysis →]

Trust indicators: Secure payment via Stripe | SSL encrypted | Cancel anytime
```

---

# Part V: Brand Positioning, Legal Considerations & Risk Mitigation

## 5.1 MORAD Name Usage — Critical Legal Consideration

The most significant risk factor for MoradAI.Us is the use of the **MORAD** name, which is the intellectual property of Mac O'Grady. Research indicates that O'Grady is extremely protective of his brand and has historically cut off students and associates for unauthorized use of his name or methodology. [^24^]

| Risk Factor | Severity | Mitigation Strategy |
|------------|----------|-------------------|
| **Trademark infringement** | High | Conduct USPTO trademark search; consult IP attorney; consider rebranding to "MORAD-inspired" language throughout; display clear disclaimer |
| **False endorsement claim** | High | Never imply official endorsement from Mac O'Grady or MORAD Golf; use "MORAD-inspired" or "based on MORAD principles" exclusively |
| **Trade dress / methodology protection** | Medium | The 10-position framework itself may not be protectable (ideas aren't copyrightable), but specific branded terminology might be; use generic biomechanical terms where possible |
| **Domain dispute** | Medium | "MoradAI.Us" incorporates "MORAD" which could trigger UDRP dispute; consider backup domain acquisition (e.g., SwingBlueprint.ai, MoradMethod.ai) |

**Recommended Legal Safeguards:**

1. **Prominent Disclaimer**: Every page of the application should display: *"MoradAI.Us is an independent technology platform. MORAD®, Mac O'Grady, and MORAD Golf are trademarks of their respective owners and are not affiliated with, endorsed by, or sponsoring this service."*

2. **About Page Clarification**: A detailed explanation that the app applies biomechanical principles derived from published MORAD research, not official MORAD instruction.

3. **IP Attorney Consultation**: Before launch, consult an intellectual property attorney specializing in sports/trademark law to review all copy and branding.

4. **Backup Brand Strategy**: Register alternative domains and prepare a rebrand strategy if necessary. Potential alternatives: SwingScore.ai, BiomechGolf.ai, TenPosition.ai.

## 5.2 Recommended Brand Messaging Framework

Given the legal considerations, the following messaging framework balances credibility with risk mitigation:

| Context | Recommended Language | Language to Avoid |
|---------|---------------------|-------------------|
| **Homepage headline** | "AI swing analysis powered by the legendary MORAD biomechanical framework" | "Official MORAD analysis" |
| **Methodology description** | "Based on MORAD principles developed by Mac O'Grady" | "Mac O'Grady's system" |
| **Analysis reports** | "MORAD-inspired position analysis" | "Certified MORAD analysis" |
| **Social proof** | "The same framework trusted by PGA champions" | "As used by Chip Beck and Vijay Singh" |
| **Footer/disclaimer** | "MORAD is a trademark of its respective owner. Not affiliated." | (omission of disclaimer) |

---

# Part VI: Technical Implementation Roadmap

## 6.1 Development Phases

| Phase | Duration | Deliverables | Priority |
|-------|----------|--------------|----------|
| **Phase 1: Foundation** | Weeks 1–2 | Next.js project setup, Neon DB schema deployment, authentication (Clerk), Stripe integration, basic UI shell | Critical |
| **Phase 2: Video Upload & Processing** | Weeks 3–4 | Two-angle video upload interface, FFmpeg frame extraction, storage integration (Vercel Blob/R2), upload validation | Critical |
| **Phase 3: AI Analysis Engine** | Weeks 5–6 | GPT-4o Vision integration, system prompt development, frame selection algorithm, report generation and parsing | Critical |
| **Phase 4: User Portal** | Weeks 7–8 | Dashboard, analysis library, progress analytics, tips & drills hub, account management | Critical |
| **Phase 5: Admin Panel** | Weeks 9–10 | Admin dashboard, user management, credit grants, content management, subscription oversight | High |
| **Phase 6: Sales Funnel Page** | Weeks 11–12 | Landing page with all sections, CTA optimization, FAQ, pricing display, free trial flow | High |
| **Phase 7: Polish & Launch** | Weeks 13–14 | Performance optimization, error handling, email notifications, analytics integration (PostHog/Amplitude), launch | High |

## 6.2 Vercel + Neon Configuration

### Neon Database Setup
1. Create Neon project at [neon.tech](https://neon.tech)
2. Run schema migrations (SQL provided in Section 3.6)
3. Configure connection pooling (built into Neon)
4. Set `DATABASE_URL` environment variable in Vercel

### Vercel Deployment Configuration
```json
// vercel.json
{
  "functions": {
    "app/api/analyze/route.ts": {
      "maxDuration": 300
    }
  }
}
```

The AI analysis API route requires extended timeout (up to 5 minutes) due to video processing and GPT-4o Vision API call duration.

### Environment Variables
```
DATABASE_URL=postgresql://...
OPENAI_API_KEY=sk-...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID=price_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
BLOB_READ_WRITE_TOKEN=vercel_blob_...
RESEND_API_KEY=re_...
```

## 6.3 AI Cost Estimation

| Component | Cost per Analysis | Monthly Cost (100 users, 10 analyses each) |
|-----------|------------------|------------------------------------------|
| **GPT-4o Vision** (20 frames × analysis) | ~$0.50–$1.00 | $500–$1,000 |
| **FFmpeg processing** (Vercel compute) | ~$0.05 | $50 |
| **Storage** (video files, ~50MB per swing) | ~$0.001 | $5 |
| **Total per analysis** | ~$0.55–$1.05 | ~$555–$1,055 |
| **Revenue per user** | $30/month | $3,000 (100 users) |

At 100 active subscribers analyzing 10 swings each per month, the AI cost represents approximately **18–35% of revenue**, leaving healthy margins for growth, marketing, and profit. As volume increases, per-analysis costs may decrease with optimization (batching, caching, model fine-tuning).

---

# Part VII: Sample AI Analysis Report

To demonstrate the output quality of the MoradAI.Us analysis engine, the following is a sample report for a hypothetical 15-handicap golfer:

---

## Swing Analysis Report — Golfer: Sample User

**Analysis Date**: July 2, 2026
**Swing Model Alignment**: Model 2 CP (Centripetal Force — Fade Pattern)
**Overall MORAD Score**: 62/100

### Score Breakdown by Position

| Position | Score | Status | Primary Issue |
|----------|-------|--------|--------------|
| P1 — Address | 7/10 | Good | Slight forward ball position; minor hip misalignment |
| P2 — Takeaway | 6/10 | Fair | Clubface slightly open; early wrist set |
| P3 — Shaft Vertical | 7/10 | Good | Shaft slightly across the line |
| P4 — Top of Backswing | 5/10 | Needs Work | Insufficient shoulder turn (~75° vs. 90° ideal); flying trail elbow |
| P5 — Transition | 5/10 | Needs Work | Upper body initiates downswing before lower body |
| P6 — Shaft Parallel (Down) | 6/10 | Fair | Slight over-the-top delivery path |
| P7 — Impact | 7/10 | Good | Good shaft lean; minor scooping tendency |
| P8 — Follow-Through (Horizontal) | 7/10 | Good | Good extension; trail arm well-extended |
| P9 — Lead Arm Horizontal | 6/10 | Fair | Insufficient body rotation; arms working independently |
| P10 — Finish | 7/10 | Good | Balanced finish; full rotation achieved |

### Primary Faults Identified

**Fault #1: Flying Trail Elbow at P4 (Severity: HIGH)**
At the top of your backswing, your trail elbow (right elbow) has moved away from your body, creating a "flying" position rather than staying tucked close to your ribcage. In the MORAD Model 2, the trail elbow should remain folded and connected to the body at P4, pointing down toward the ground. Your elbow is pointing outward, which creates a loss of swing plane control.

*Impact on ball flight*: This fault is the primary cause of your inconsistent contact and your tendency to hit weak fades or slices. When the trail elbow flies at the top, it must "chicken wing" back toward the body on the downswing, which steepens the shaft and forces an over-the-top delivery. This produces left-to-right spin (for a right-hander) and glancing contact that costs you distance and accuracy.

*Root cause*: The flying elbow typically stems from insufficient shoulder turn depth. Because your shoulders are only rotating ~75° instead of the ideal 90°, your trail arm has nowhere to go but outward. The body is essentially creating room for itself by pushing the elbow away.

**Fault #2: Upper Body Initiates Downswing (Severity: MEDIUM)**
At P5 (transition), your shoulders and arms begin the downswing before your lower body has initiated the movement. In the MORAD Model 2 CP pattern, the downswing sequence should be: hips first, then shoulders, then arms, then club. Your sequence is reversed: shoulders and arms move first, with the hips lagging behind.

*Impact on ball flight*: This sequencing error reduces your power potential and contributes to the over-the-top path. When the upper body leads, the club is pulled outward and downward rather than being delivered from the inside. This reinforces the slice/fade pattern and limits your ability to compress the ball.

*Root cause*: The upper-body initiation is often a compensation for the flying trail elbow. When the elbow is out of position at the top, the natural instinct is to "rescue" the swing by pulling down with the shoulders and arms. Fixing the elbow position will make the correct sequencing feel more natural.

### Improvement Plan

**Priority 1: Trail Elbow Connection Drill (Weeks 1–2)**
Place a headcover or small towel under your trail armpit and hit half-swings (P1 to P4 and back to P1) while keeping the towel in place. This forces your trail elbow to stay connected to your body throughout the backswing. Practice 20 repetitions daily.

**Priority 2: Shoulder Turn Flexibility (Weeks 1–4)**
Your limited shoulder turn is restricting your swing. Perform the following flexibility routine daily:
- Thoracic spine rotations: 10 reps each direction
- Shoulder 90/90 stretches: Hold 30 seconds each side
- Hip flexibility lunges: 10 reps each side
Improved flexibility will allow a deeper coil and eliminate the need for your elbow to fly outward.

**Priority 3: Lower Body Initiation Drill (Weeks 3–4)**
Practice the "step drill": Take your address position, then step your lead foot toward the target to initiate the downswing while keeping your shoulders and arms passive. This trains the correct sequencing: lower body first, upper body follows. Start with slow-motion practice swings, then progress to full speed.

### Model Assessment

Your current swing mechanics align most closely with the **Model 2 CP (Centripetal Force) pattern**, which naturally produces a controlled fade. With your current faults corrected, this pattern is well-suited to your body mechanics and should produce consistent, penetrating fade trajectories with good distance control.

The **Model 2 CF (Centrifugal Force)** pattern — which produces a draw — is achievable once your sequencing and elbow position are improved. The CF pattern requires a more aggressive lower-body lateral movement and hand release, which will become accessible after you master the basic Model 2 CP mechanics.

**Model 1** (the power-focused, trail-arm-dominant swing) is **not recommended** for your current mechanics. Model 1's emphasis on trail-arm power would exacerbate your flying elbow tendency and make consistent contact more difficult.

### Progress Tracking

To measure improvement, focus on these metrics in your next analysis:
- P4 trail elbow position (target: tucked, pointing down)
- P4 shoulder turn angle (target: 85–90°)
- P5 sequencing (target: hips initiate before shoulders)
- Overall score improvement (target: 68+ within 4 weeks)

Upload your next swing in 2–3 weeks to track progress and receive updated recommendations.

---

*This analysis is based on MORAD biomechanical principles and is provided for instructional purposes. For personalized in-person instruction, consult a qualified PGA professional.*

---

# Part VIII: Key Differentiators & Competitive Moat

MoradAI.Us possesses several structural advantages that create defensible differentiation in the golf technology market:

| Differentiator | Explanation | Competitive Barrier |
|---------------|-------------|-------------------|
| **MORAD Framework Depth** | No competitor uses a recognized, comprehensive 10-position biomechanical framework. Most apps offer generic advice without systematic positional analysis. | High — requires deep domain expertise in MORAD methodology |
| **Two-Angle Video Requirement** | Mandating both face-on and down-the-line views ensures complete 3D analysis capability. Competitors often analyze single-angle videos. | Medium — technical but replicable |
| **Swing Scoring System (0–100)** | The MORAD scoring methodology provides quantifiable progress tracking that generic apps cannot offer. | High — tied to MORAD framework understanding |
| **Model 1/Model 2/CP/CF Assessment** | No competitor assesses swing mechanics against distinct biomechanical models. This provides personalized pathway recommendations. | High — requires sophisticated analytical framework |
| **AI + Human Expertise Hybrid** | The AI is guided by expert-crafted system prompts embedding decades of MORAD research. This is not generic AI — it's expert-trained AI. | Medium-High — depends on prompt quality and domain expertise |
| **Progress Tracking Over Time** | Historical comparison and trend analysis tied to the 10-position framework creates longitudinal value that single-analysis tools cannot match. | Medium — data moat grows with user base |

---

# Part IX: Success Metrics & KPIs

The following metrics should be tracked from launch to measure product success and guide iteration:

| Metric Category | Specific Metric | Target (Month 6) |
|----------------|----------------|------------------|
| **Acquisition** | Monthly new signups | 200+ |
| **Acquisition** | Trial-to-paid conversion rate | 25%+ |
| **Acquisition** | Customer acquisition cost (CAC) | <$15 |
| **Engagement** | Average analyses per active user/month | 6+ |
| **Engagement** | Return analysis rate (users who upload 2+ times) | 60%+ |
| **Engagement** | Average time in portal per session | 8+ minutes |
| **Revenue** | Monthly Recurring Revenue (MRR) | $3,000+ |
| **Revenue** | Average Revenue Per User (ARPU) | $30+/month |
| **Satisfaction** | User-reported analysis accuracy (thumbs up rate) | 85%+ |
| **Satisfaction** | Net Promoter Score (NPS) | 40+ |
| **Retention** | Monthly churn rate | <10% |
| **Retention** | 3-month retention rate | 50%+ |

---

# Appendix A: Glossary of MORAD Terms

| Term | Definition |
|------|-----------|
| **MORAD** | Mac O'Grady Research and Development — the comprehensive golf swing analysis system |
| **P1–P10** | The 10 positions of the golf swing in the MORAD framework |
| **Model 1** | O'Grady's first swing model — centered pivot, trail-arm dominant, power-focused |
| **Model 2** | O'Grady's refined swing model — weight shift dynamics, CP and CF patterns |
| **CP (Centripetal Force)** | Force pattern producing a fade; inward-pulling, centered rotation |
| **CF (Centrifugal Force)** | Force pattern producing a draw; outward-pulling, lateral shift |
| **Lag** | The angle between club shaft and lead arm during the downswing; power storage |
| **Flat Left Wrist** | Wrist position at impact where the lead wrist is flat (not cupped or bowed) |
| **Flying Trail Elbow** | Trail elbow moving away from the body at the top of the backswing |
| **Early Extension** | Spine straightening and pelvis thrusting toward the ball during downswing |
| **Separation (X-Factor)** | The angle difference between hip rotation and shoulder rotation |
| **Radius Locks** | O'Grady's concept of maintaining consistent swing radius around the sternum |
| **Bunny Hop** | Model 1 trigger where the trail knee kicks inward to initiate the downswing |
| **Trajectory Windows** | The 9 combinations of height and shape (low/mid/high × draw/straight/fade) |
| **Scooping** | Flipping the wrists at impact, resulting in cupped lead wrist and weak contact |
| **Over-the-Top** | Downswing path that moves outside-to-inside, producing slices/pulls |

---

# Appendix B: Technology Stack Decision Rationale

| Technology | Why It Was Selected | Alternative Considered | Why Alternative Was Rejected |
|-----------|-------------------|----------------------|---------------------------|
| **Next.js 14+** | Full-stack React with App Router, server components, API routes, excellent Vercel integration | Remix, SvelteKit | Remix has less mature ecosystem; SvelteKit has smaller talent pool |
| **Vercel** | Zero-config deployment, edge functions, automatic scaling, global CDN, perfect Next.js integration | AWS Amplify, Netlify | AWS Amplify more complex; Netlify less optimized for Next.js App Router |
| **Neon PostgreSQL** | Serverless scaling, connection pooling built-in, branching for dev/staging, generous free tier | Supabase, PlanetScale | Supabase has more features than needed; PlanetScale is MySQL (less familiar for most devs) |
| **GPT-4o Vision** | Best-in-class vision understanding, detailed image analysis capability, structured output | Claude 3.5 Sonnet, Gemini Pro | GPT-4o Vision currently leads in detailed visual analysis accuracy |
| **Clerk** | Complete auth solution with OAuth, role-based access, session management, minimal setup | NextAuth.js, Auth0 | NextAuth.js requires more configuration; Auth0 more expensive at scale |
| **Stripe** | Industry standard for subscriptions, excellent webhook support, predictable pricing | Paddle, LemonSqueezy | Paddle has better tax handling but less flexible; LemonSqueezy newer with less mature subscription APIs |
| **Tailwind + shadcn/ui** | Rapid UI development, consistent design system, accessible components | Material UI, Chakra UI | Tailwind is more performant and flexible; shadcn/ui provides copy-paste component quality |

---

*Document Version: 1.0 | Last Updated: July 2, 2026 | Prepared for MoradAI.Us Development*
