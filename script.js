//You can edit ALL of the code here

// runs when the page loads
function setup() {
  // get all episodes using the provided function
  const allEpisodes = getAllEpisodes();
  // display them on the page
  makePageForEpisodes(allEpisodes);
}
// shows the episodes on the page
function makePageForEpisodes(episodeList) {
  // find the root element in the HTML
  const rootElem = document.getElementById("root");
  // clear anything that might already be in root
  // ORIGINAL LINE OF CODE rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
