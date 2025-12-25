# Services Grid Spacing Analysis Report

## Component Hierarchy & Spacing Cascade

```
Home.jsx
├── outer wrapper div
│   ├── marginTop: 24px
│   ├── marginInline: clamp(6px, 3vw, 16px)
│   ├── padding: clamp(10px, 3vw, 16px)
│   └── backgroundColor: transparent
│
└── HomeServicesCardGrid
    ├── outer div (navy container)
    │   ├── padding: 0 (outer wrapper now provides the horizontal spacing)
    │   ├── margin: 0
    │   ├── background: var(--mlmNavy)
    │   ├── borderRadius: 16px (top only)
    │   └── border: 1px solid var(--mlmOrange)
    │
    └── ServicesCardGrid
        ├── section (styles.section)
        │   ├── padding: 0 (outer wrapper now provides the horizontal spacing)
        │   └── role: "list"
        │
        └── div (styles.grid)
            ├── maxWidth: 1100px
            ├── margin: 0 auto
            ├── padding: none
            ├── gap: 14px
            └── [contains service cards]
```

## File Locations & Current Spacing

### 1. **Home.jsx** 
- **File:** `q:\HomeLabDev\ReactWorld\src\pages\Home\Home.jsx`
- **Lines:** 26-36
- **Component:** Outer wrapper div
- **Spacing:**
  - `marginTop: 24px`
  - `marginInline: clamp(6px, 3vw, 16px)` - **ADDS SIDE MARGINS**
  - `padding: clamp(10px, 3vw, 16px)` - **ADDS INTERNAL PADDING**
- **Issue:** Creates side margins that shift services/form inward

### 2. **HomeServicesCard.jsx**
- **File:** `q:\HomeLabDev\ReactWorld\src\pages\Home\components\ServicesCardGrid\HomeServicesCard.jsx`
- **Lines:** 17-45
- **Component:** HomeServicesCardGrid wrapper div
- **Spacing:**
  - `padding: 0` - **Horizontal padding removed so this wrapper aligns with the form**
  - `margin: 0`
  - `borderTopLeftRadius: 16px`
  - `borderTopRightRadius: 16px`
-- **Issue:** After the horizontal padding removal, the wrapper depends on the outer container for spacing, so it still needs a visual cue (border) to separate it from the form

### 3. **ServicesCardGrid.css.js**
- **File:** `q:\HomeLabDev\ReactWorld\src\pages\Home\components\ServicesCardGrid\ServicesCardGrid.css.js`
- **Lines:** 11-13 (section), 33-40 (grid)
- **Component:** Internal grid styles
- **Spacing:**
  - `section.padding: 0` - **Horizontal padding removed to align with the form**
  - `section.margin: 0`
  - `grid.maxWidth: 1100px`
  - `grid.margin: 0 auto`
  - `grid.gap: 14px` (space between cards)
- **Issue:** The section padding stacked with the surrounding wrapper padding and drove the service cards further inside the viewport than the master form, so removing both horizontal layers was necessary to restore alignment.

### 4. **MasterContactForm.jsx**
- **File:** `q:\HomeLabDev\ReactWorld\src\pages\Home\components\MasterContactForm\MasterContactForm.jsx`
- **Lines:** 131-138
- **Component:** MasterContactForm wrapper
- **Styling:** Uses CSS Module classes

### 5. **MasterFormStyles.module.css**
- **File:** `q:\HomeLabDev\ReactWorld\src\pages\Home\components\MasterContactForm\MasterFormStyles.module.css`
- **Lines:** 55-65
- **Component:** mlmMasterFormShell class
- **Spacing:**
  - `margin: 3rem auto` - **LARGE TOP/BOTTOM MARGINS**
  - `padding: 24px`
- **Issue:** 3rem margin creates gap above form

## The Alignment Problem (360px Mobile)

At 360px width, on screen you see:

**Services Section:**
- Outer wrapper marginInline: ~10px (at 360px, 3vw ÷ 10px)
- HomeServicesCardGrid horizontal padding: 24px (the navy wrapper from `HomeServicesCard.jsx` adds this around the grid)
- ServicesCardGrid section padding: 24px (see `ServicesCardGrid.css.js` for the section object)
- **Total left padding before the fix: ~10px + 24px + 24px = ~58px from the viewport**

**Master Form:**
- MasterFormShell margin: 0 (inherits from the same outer wrapper)
- MasterFormShell padding: 24px (`mlmMasterFormShell` inside `MasterFormStyles.module.css`)
- **Total left padding: ~10px + 24px = ~34px from the viewport**

**Result:** Services content started ~24px further in than the master form because two nested horizontal padding layers pushed it inward; adjusting vertical padding didn’t change that horizontal offset, so it had no impact on the visible misalignment.
  - **Fix applied:** Removed the intermediate horizontal padding (HomeServicesCard wrapper + ServicesCardGrid section) so the services grid now relies on the outer wrapper for its horizontal spacing, the same baseline the master form already uses.

## Research Findings

- Reviewed `src/pages/Home/Home.jsx` (outer wrapper at lines ~26-36) and confirmed `marginInline: clamp(6px, 3vw, 16px)` + `padding: clamp(10px, 3vw, 16px)` is the shared horizontal baseline for both sections.
- Inspected `HomeServicesCard.jsx` (lines ~17-45) and `ServicesCardGrid.css.js` (lines ~11-17) to trace the two nested 24px horizontal padding layers that were pushing the services cards further in.
- Checked `MasterFormStyles.module.css` (mlmMasterFormShell, lines ~55-65) to verify the master form only relied on the outer wrapper plus its own 24px padding, so subtracting the two service paddings realigns the start of the cards with the form.
- Vertical-only padding tweaks (e.g., paddingBlock) do not change the computed horizontal origin of the services content, so the recent attempt didn’t show an effect even though it added vertical breathing room.

## Content Weight Mismatch

The service cards themselves carry much heavier copy than the master form, which the report did not call out yet. The titles defined in `src/utils/Constants.js` (e.g., the `Material Sales (Mulch/Topsoil/Sand/Gravel/Crushed Stone/Cobblestone)` entry) stretch over two lines because they include the “reason” text for each offering, while the master form fields and headings remain single-line. Those taller cards add vertical mass that makes the services stack feel bulkier than the relatively compact form area, so padding differences alone understate the perceivable misalignment.

## Recommended Fix Strategy

All three layers should have **identical horizontal spacing**. Options:

### Option A: Normalize to 16px padding throughout
1. Home.jsx outer wrapper: `padding: 16px`, `marginInline: 0`
2. HomeServicesCard: `padding: 16px` (reduce from 24px)
3. ServicesCardGrid.css.js section: `padding: 16px` (reduce from 24px)
4. MasterFormStyles: `padding: 16px`, `margin: 0 auto` (reduce from 24px & 3rem)

### Option B: Use responsive clamp for all
1. All wrappers: `padding: clamp(12px, 3vw, 24px)`
2. All margins: `margin: 0` (no auto margins)

### Option C: Remove padding from middle layer (implemented)
1. HomeServicesCard padding: 0 (let the outer wrapper govern horizontal spacing)
2. ServicesCardGrid.css.js section padding: 0 (keep the grid flush with the wrapper)
3. Outer Home wrapper remains the single source of horizontal spacing
4. Service cards now align with the master form's starting edge

## Current Cascade Summary

| Layer | File | Padding | Margin |
|-------|------|---------|--------|
| Outer wrapper | Home.jsx | `clamp(10px, 3vw, 16px)` | `marginInline: clamp(6px, 3vw, 16px)` |
| Services container | HomeServicesCard.jsx | `padding: 0` | `0` |
| Grid section | ServicesCardGrid.css.js | `padding: 0` | `0` |
| Form container | MasterFormStyles.css | `24px` | `3rem auto` |

**Total horizontal space at 360px:** Both sections now share the same baseline because the only horizontal offset is the outer wrapper's margin/padding; the innermost wrappers no longer add extra inset.
