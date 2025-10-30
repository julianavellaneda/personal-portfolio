# Legal Pages Enhancement Plan

## Overview
This document outlines the plan to enhance the legal pages system by creating dedicated app pages and removing the links from the footer. The new system will provide a more robust and easier-to-maintain approach to managing legal documents for multiple applications.

## Current State
- Legal pages are dynamically generated based on URL parameters
- Footer contains direct links to legal pages for the "Gather" app
- No centralized location to view all apps with legal pages

## Goals
1. Create a central page to list all applications with legal pages
2. Create individual app overview pages that link to each app's legal documents
3. Remove legal links from the main footer
4. Improve the organization and maintainability of legal pages

## Implementation Steps

### Step 1: Create LegalApps Component
- Create `src/pages/LegalApps.tsx`
- This page will list all applications that have legal pages
- Each app will link to its own legal pages overview

### Step 2: Create AppLegalPages Component
- Create `src/pages/AppLegalPages.tsx`
- This page will show all legal pages for a specific app
- Will use URL parameter to determine which app to display

### Step 3: Update Router Configuration
- Update `src/Router.tsx` to include new routes:
  - `/legal/apps` - Main legal apps listing
  - `/legal/app/:appName` - Individual app legal pages overview

### Step 4: Update Footer
- Remove the legal links from `src/components/layout/Footer.tsx`

### Step 5: Update Legal Page Links
- Update links in legal pages to point to the new app-specific overview pages
- Ensure all internal navigation works properly

### Step 6: Testing
- Test navigation between all legal pages
- Verify all app links work correctly
- Ensure backward compatibility for existing links

## File Structure
```
src/
├── pages/
│   ├── LegalApps.tsx          # Main legal apps listing
│   ├── AppLegalPages.tsx      # Individual app legal pages overview
│   ├── PrivacyPolicy.tsx      # Current legal page (updated links)
│   ├── TermsAndConditions.tsx # Current legal page (updated links)
│   ├── RequestAccountDeletion.tsx # Current legal page (updated links)
│   ├── ChildSafetyPolicy.tsx  # Current legal page (updated links)
│   └── LegalPages.css         # Shared styles
```

## Routes
- `/legal/apps` - List all apps with legal pages
- `/legal/app/:appName` - Legal pages for specific app
- `/app/:appName/privacy-policy` - Existing route (maintained for compatibility)
- `/app/:appName/terms-and-conditions` - Existing route (maintained for compatibility)
- `/app/:appName/request-account-deletion` - Existing route (maintained for compatibility)
- `/app/:appName/child-safety-policy` - Existing route (maintained for compatibility)

## Backward Compatibility
All existing routes will be maintained to ensure external links continue to work. The new system will provide an improved navigation experience while preserving existing functionality.

## Benefits
- Centralized location to access all app legal pages
- Easier to add new applications to the legal pages system
- Cleaner footer without legal links
- Better user experience for navigating legal documents