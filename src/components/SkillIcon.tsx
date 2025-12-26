import React from "react";

interface SkillIconProps {
  skill: string;
  iconName?: string;
  className?: string;
}

// Mapping of skill names to svgl.app icon names
// Some icons have light/dark variants, so we use the light version by default
const skillIconMap: Record<string, string> = {
  // Programming Languages
  "HTML": "html5",
  "Java": "java",
  "Javascript": "javascript",
  "TypeScript": "typescript",
  "C++": "c-plusplus",
  "Php": "php",
  "Python": "python",
  "C#": "csharp",
  
  // Frontend
  "React": "react_light",  // React has light/dark variants
  "React.js": "react_light",  // Alternative name
  "Angular": "angular",
  "Astro": "astro-icon-light",  // Astro has light/dark variants
  "HTML5/CSS3": "html5",
  "TailwindCSS": "tailwindcss",
  
  // Backend
  "Node.js": "nodejs",
  
  // Database
  "MySQL": "mysql-icon-light",  // MySQL has light/dark variants
  "Microsoft SQL Server": "sql-server",
  "Oracle": "oracle",  // Using Simple Icons as fallback
  
  // Cloud & DevOps
  "Google Cloud": "google-cloud",
  
  // Tools
  "GitHub": "github_light",  // GitHub has light/dark variants
  "Visual Studio Code": "vscode",
  "Jira": "jira",  // Using Simple Icons as fallback
  "Selenium": "selenium",  // Using Simple Icons as fallback
  "n8n": "n8n",
};

// Icons not available in svgl.app - use Simple Icons CDN as fallback
const simpleIconsFallback: Record<string, string> = {
  "Jira": "jira",
  "Selenium": "selenium",
};

// Local icons from public folder
const localIcons: Record<string, string> = {
  "Oracle": "/oracle.png",
};

export default function SkillIcon({ skill, iconName, className = "w-5 h-5" }: SkillIconProps) {
  const icon = iconName || skillIconMap[skill];
  
  if (!icon) {
    // Fallback if no icon found - return null to hide icon
    return null;
  }

  // Check if we have a local icon for this skill
  const localIcon = localIcons[skill];
  if (localIcon) {
    return (
      <img 
        src={localIcon} 
        alt={`${skill} icon`}
        className={className}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    );
  }

  // Check if we should use Simple Icons CDN for this skill
  const useSimpleIcons = simpleIconsFallback[skill];
  const iconUrl = useSimpleIcons 
    ? `https://cdn.simpleicons.org/${useSimpleIcons}`
    : `https://svgl.app/library/${icon}.svg`;

  return (
    <img 
      src={iconUrl} 
      alt={`${skill} icon`}
      className={className}
      loading="lazy"
      onError={(e) => {
        // Hide image if it fails to load
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}
