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
    │   ├── padding: 24px
    │   ├── margin: 0
    │   ├── background: var(--mlmNavy)
    │   ├── borderRadius: 16px (top only)
    │   └── border: 1px solid var(--mlmOrange)
    │
    └── ServicesCardGrid
        ├── section (styles.section)
        │   ├── padding: 24px
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
  - `padding: 24px` - **LARGE PADDING AROUND CONTENT**
  - `margin: 0`
  - `borderTopLeftRadius: 16px`
  - `borderTopRightRadius: 16px`
- **Issue:** 24px padding is larger than other sections

### 3. **ServicesCardGrid.css.js**
- **File:** `q:\HomeLabDev\ReactWorld\src\pages\Home\components\ServicesCardGrid\ServicesCardGrid.css.js`
- **Lines:** 11-13 (section), 33-40 (grid)
- **Component:** Internal grid styles
- **Spacing:**
  - `section.padding: 24px` - **ANOTHER 24px PADDING**
  - `section.margin: 0`
  - `grid.maxWidth: 1100px`
  - `grid.margin: 0 auto`
  - `grid.gap: 14px` (space between cards)
- **Issue:** Double padding (24px + 24px = 48px total vertical padding)

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
- Outer wrapper marginInline: ~10px (at 360px, 3vw ≈ 10px)
- HomeServicesCardGrid padding: 24px
- ServicesCardGrid section padding: 24px
- **Total left padding: ~44px + 10px = ~54px from viewport**

**Master Form:**
- MasterFormShell margin: 0 (from outer wrapper)
- MasterFormShell padding: 24px
- **Total left padding: ~10px + 24px = ~34px from viewport**

**Result:** Services content starts further in than form, misaligned!

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

### Option C: Remove padding from middle layer
1. HomeServicesCard padding: 0 (let parent handle)
2. ServicesCardGrid.css.js section: 0 (let parent handle)
3. Let outer Home wrapper be the single source of spacing

## Current Cascade Summary

| Layer | File | Padding | Margin |
|-------|------|---------|--------|
| Outer wrapper | Home.jsx | `clamp(10px, 3vw, 16px)` | `marginInline: clamp(6px, 3vw, 16px)` |
| Services container | HomeServicesCard.jsx | `24px` | `0` |
| Grid section | ServicesCardGrid.css.js | `24px` | `0` |
| Form container | MasterFormStyles.css | `24px` | `3rem auto` |

**Total horizontal space at 360px:** Inconsistent alignment due to accumulating marginInline + multiple padding layers.
