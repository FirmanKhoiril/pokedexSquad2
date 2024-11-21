export const combinedDescription = (flavorTextEntries) => {
    return [
      ...new Set(
        flavorTextEntries
          .filter((desc) => desc.language.name === "en")
          .map((desc) => desc.flavor_text.replace(/[\n\f]/g, " "))
      ),
    ].join(" ");
};
