import React from "react";
import { Timeline } from "../components/ui/Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "LoopAPI Launch - 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl font-normal mb-4">
            Successfully launched LoopAPI, a free API aggregation platform with
            authentication and category-based API browsing.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/loopapi-homepage.png"
              alt="LoopAPI Homepage"
              className="rounded-lg object-cover h-28 md:h-44 w-full shadow-lg"
            />
            <img
              src="/assets/loopapi-dashboard.png"
              alt="LoopAPI Dashboard"
              className="rounded-lg object-cover h-28 md:h-44 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Development Phase - 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl font-normal mb-4">
            Integrated Firebase Authentication, Firestore, and API submission
            features while optimizing UI performance.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/firebase-auth.png"
              alt="Firebase Authentication"
              className="rounded-lg object-cover h-28 md:h-44 w-full shadow-lg"
            />
            <img
              src="/assets/api-upload.png"
              alt="API Upload Feature"
              className="rounded-lg object-cover h-28 md:h-44 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Upcoming Features",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl font-normal mb-4">
            Exciting new features coming soon to LoopAPI:
          </p>
          <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 text-md">
            <li> Developer Forums for API discussions and networking.</li>
            <li>API Submission & Management for user-contributed APIs.</li>
            <li>Blogs & Tutorials to help developers with API integrations.</li>
            <li> Enhanced search and filtering for better API discovery.</li>
            <li>Introducing API Testing </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
}
