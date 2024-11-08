import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SmartSenseDescription() {
  const tasks = [
    {
      text: "Developed reusable front-end components using React.js and Next.js, enhancing the scalability and performance of applications.",
      keywords: ["React.js", "Next.js", "reusable components", "scalability"],
    },
    {
      text: "Optimized user interfaces and improved application performance with TypeScript, Material UI, and Redux, ensuring a smooth user experience.",
      keywords: ["TypeScript", "Material UI", "Redux", "user experience"],
    },
    {
      text: "Converted Figma designs into functional components, closely aligning design with development and maintaining high visual fidelity.",
      keywords: ["Figma", "design", "functional components"],
    },
    {
      text: "Collaborated in regular code reviews and used tools like JIRA and SonarQube for issue tracking and code quality maintenance.",
      keywords: ["code reviews", "JIRA", "SonarQube", "code quality"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col space-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Developer{" "}
            <span className="text-AAsecondary">@ SmartSense Solutions</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jun 2022 - Present
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() =>
              window.open("https://www.smartsensesolutions.com/", "_blank")
            }
          >
            www.smartsensesolutions.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
