/**
 * This is the function that will be called every time a new track is played.
 *
 * Use this function as your entry point for animations / css.
 *
 * Note: In the app, the user may want to edit the font, color, or size of
 * things if they're given the option. You
 *
 * @param {NowPlayingTrackId} track
 */
function updateTrack(track) {

  const themeSettings = {
    titleColor: '#FF0000',
    artistColor: '#0000FF'
  }

  document.querySelector('#title').innerHTML = track.title;
  document.querySelector('#title').style.color = themeSettings.titleColor;

  document.querySelector('#artist').innerHTML = track.artist;
  document.querySelector('#artist').style.color = themeSettings.artistColor;
}
