-----

## 🚀 README: Next.js Beauty Arionkoder Booking System MVP

This project is a Minimal Viable Product (MVP) for a multi-tenant booking system built using **Next.js 14 App Router** and **TypeScript**. It focuses on delivering a high-performance, SEO-friendly landing page for existing beauty centers, fulfilling the core challenge requirements.

# check it on victorlms.arionkoder.vercel.app 

-----

## 1\. Features and Implementation

| Feature | Requirement | Implementation Details |
| :--- | :--- | :--- |
| **Center Landing Page** | `/[center]` Dynamic Route | Implemented using the `app/[center]/page.tsx` dynamic route segment, correctly serving pages for mock centers like `/center1`. |
| **Data Fetching** | Simulated API with \~1.5s delay | `getCenterData` in `src/lib/api.ts` uses `setTimeout(..., 1500)` to simulate latency, integrated with Next.js **`loading.tsx`** for a smooth **Suspense** fallback. |
| **Service Listing** | Display name, price, duration, and Book button. | Handled by the **`ServiceCard`** component, which uses Client Components for interactive elements. |
| **Booking Form** | Name, email, date, time, validation. | Implemented within a **`BookingModal`** (Client Component) featuring basic form validation (e.g., future date/time, valid email format). |
| **UX Enhancement** | Cursor Follow Shadow | Added a dynamic, interactive `box-shadow` effect to service cards in **`ServiceCard.tsx`**, following the mouse position for a premium look. |
| **SEO** | Dynamic Metadata & Structured Data | Used the Next.js **`generateMetadata`** function to create unique titles/descriptions for each center and embedded **JSON-LD** for Rich Results. |
| **Design** | Professional Design | Styled entirely with **Tailwind CSS**. |

-----

## 2\. Project Structure

The architecture follows Next.js App Router best practices, emphasizing modularity and separation of Server Components (SC) and Client Components (CC).

```
├── .next/
├── app/
│   ├── [center]/
│   │   ├── loading.tsx          # Suspense fallback for latency
│   │   └── page.tsx           # Center Landing Page (SC Data Fetch & Rendering)
│   ├── favicon.ico
│   ├── globals.css          # TailwindCSS imports & global styles
│   ├── layout.tsx           # Global HTML structure and Static SEO Metadata
│   ├── page.tsx             # Center directory list (Client Component)
│   ├── robots.ts            # Dynamic robots.txt generation
│   └── sitemap.ts           # Dynamic sitemap.xml generation
├── node_modules/
├── public/                  # Static assets
└── src/
    ├── components/
    │   ├── BookingForm.tsx      # Form fields and validation
    │   ├── CenterHeader.tsx     # Displays center name/logo/description
    │   ├── CenterLinkCard.tsx   # Card for root directory list
    │   ├── ConfirmationMessage.tsx # Booking success message
    │   ├── ServiceCard.tsx      # Service listing card with UX shadow
    │   └── ServiceList.tsx      # Container for service cards
    ├── hooks/
    │   └── useLocalStorage.ts   # Custom hook (abandoned for persistence, but present)
    └── lib/
        ├── api.ts               # Mock API interface (data fetching logic)
        ├── mocks.ts             # Static mock data objects
        └── validation.ts        # Form validation helpers
```

-----

## 3\. Setup and Run

This project requires Node.js (v18+).

1.  **Clone the repository and install dependencies:**

    ```bash
    git clone https://github.com/victorlmsdev/beauty-arionkoder
    cd beauty-arionkoder
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    # The application will be running at http://localhost:3000
    ```

3.  **View Routes:**

      * **Root Directory:** `http://localhost:3000`
      * **Center 1:** `http://localhost:3000/center1`
      * **Center 2:** `http://localhost:3000/center2`

-----

## 4\. Technical Decisions & Assumptions

| Decision | Rationale |
| :--- | :--- |
| **Next.js App Router & SC** | Utilized **Server Components** (`/[center]/page.tsx`) for data fetching to ensure **SEO** and **performance**, guaranteeing indexable content before client-side hydration. |
| **Dynamic Metadata** | Used `generateMetadata` in the dynamic route to inject content-specific SEO tags, fulfilling best practices for a multi-tenant system. |
| **Loading UX** | The artificial `setTimeout` delay is handled gracefully by the native `loading.tsx` file, providing a robust, non-blocking user experience. |
| **Data Mocking** | Initial center data is stored in `src/lib/mocks.ts` and loaded directly by server components via `src/lib/api.ts`. |

-----

## 5\. Key Bug Corrections and Architectural Refinements

The development process involved critical architectural fixes to ensure stability and user experience.

| Bug/Issue | Problem Summary | Resolution |
| :--- | :--- | :--- |
| **404 on New Center (Abandoned)** | Attempts to implement dynamic center registration using server-side storage failed repeatedly due to Next.js development server's Hot Module Reloading (HMR) resetting the in-memory state. | **Decision:** Feature was deemed too unstable for MVP submission. The focus reverted to the core requirement of serving pages for **existing** mock centers (`/center1`, `/center2`). |
| **Service Data Logic** | The mock API initially had logic issues where the dynamic data was not being correctly passed to the component. | **Fixed `getCenterData`** to ensure service data is correctly loaded from the mock source and passed to the component without accidental overwrites. |
| **UX Polish** | Implemented the **`ServiceCard` cursor shadow** to enhance engagement, demonstrating advanced knowledge of Client Component interactivity and custom styling. |

-----

## 6\. Future Enhancements

  * **Real Slot Availability:** Implement complex date/time calculation based on service duration, working hours, and existing bookings.
  * **User Authentication:** Integrate NextAuth.js or Clerk to enable center owners to log in and manage their services.
  * **Real Database:** Replace the current data mock with a production-ready database and implement proper data fetching with caching/revalidation.
  * **Dynamic Center Registration (Production):** Re-implement center registration using a persistent database (not local file system or memory) to ensure data stability outside of the development environment.

## 7\. AI use
  * **Gemini:** Used to understand project scope and help developing code files on an earlier stage
  * **WindSurf:** Help refactoring mock data, inferring types and providing code samples
## 8\. Report
  * **AI use:** AI was handful defining prior stages and providing base code, but it didn't predict nor understood some UI/UX usabilities such as theme management on device and its impact on contrast
    *  It excelled providing types, generating mock data or basic SEO configurations
    *  It alucinated when asked to provide progressbar logic and localstorage data persistance
  * **Invested time:** Around 2h30min to code the provided repo, I would say less than 2h of it coding, rest of time was enhancing navigation and personalizing data
  * **TODO:** Develop a proper Design System, register new centers, set PWA... 
