

function generateSignature(name, title, company) {
  if (!name || typeof name !== "string") return "";

  const intial = name.trim()[0].toUpperCase() 
  const charCode = intial.charCodeAt(0)
  const tail = concatTC(title, company)

  if (charCode >= 65 && charCode < 73) {
    return `>>${name}${tail}`
  } else if (charCode >= 73 && charCode < 82) {
    return `--${name}${tail}`
  } else if (charCode >= 82 && charCode <= 90) {
    return `::${name}${tail}`
  }

  return name + tail; // fallback
}


function concatTC (t, c) {
  return `, ${t} at ${c}`
}



/*
Email Signature Generator
Given strings for a person's name, title, and company, return an email signature as a single string using the following rules:

The name should appear first, preceded by a prefix that depends on the first letter of the name. For names starting with (case-insensitive):
A-I: Use >> as the prefix.
J-R: Use -- as the prefix.
S-Z: Use :: as the prefix.
A comma and space (, ) should follow the name.
The title and company should follow the comma and space, separated by " at " (with spaces around it).
For example, given "Quinn Waverly", "Founder and CEO", and "TechCo" return "--Quinn Waverly, Founder and CEO at TechCo".
*/ 
