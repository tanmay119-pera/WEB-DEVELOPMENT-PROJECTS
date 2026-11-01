// Audio User Preference Persistence
export function saveAudioPref(enabled: boolean) {
  localStorage.setItem('living_archive_audio', enabled ? '1' : '0');
}
