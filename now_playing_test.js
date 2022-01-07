
/**
 * This will generate a simple object containing title and artist.
 * @returns Fake track information
 */
function generateFakeTrack() {
  const capitalizedWords = (limit) => {
    return randomWords({ min: 1, max: limit })
      .map(w => w[0].toUpperCase() + w.substring(1))
      .join(' ')
  };
  return {
    id: Math.random().toString().substring(2),
    title: capitalizedWords(6),
    artist: capitalizedWords(3),
  }
}

function testNowPlaying() {
  updateTrack(generateFakeTrack());
}

updateTrack(generateFakeTrack());