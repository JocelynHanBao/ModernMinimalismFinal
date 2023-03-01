var count = 0;
var previous = -1;

window.arenaCallback = () => {
  // Put your JavaScript in here!
  // This will run after Are.na’s API returns your data.

  let imageBlocks = document.querySelectorAll("li.image-block");

  // Go through all of my image blocks
  imageBlocks.forEach((block) => {
    // Make the blocks react on click
    block.classList.add("active");
    // Target the figure element of the block
    block.querySelector("figure").onclick = () => {
      // Add a class called active
      block.classList.add("active");
      imageBlocks.forEach((block) => {
        block.classList.add("meidian");
      });
    };

    // Target the aside element of the block
    block.querySelector("aside").onclick = () => {
      // Remove a class called active
      block.classList.remove("active");
      imageBlocks.forEach((block) => {
        block.classList.remove("meidian");
      });
    };
  });
};
