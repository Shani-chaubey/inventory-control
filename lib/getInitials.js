export function getInitials(fullName) {
    // Split the full name into words
    const words = fullName.split(" ");
    let initials = "";
    for (let i = 0; i < words.length; i++) {
      initials += words[i][0];
    }
    initials = initials.toUpperCase();

    return initials;
  }