export function parseLocation (location) {
  try {
    if (!location) {
      throw new Error('Location is required')
    }
  } catch (error) {
    console.error('Error parsing location:', error)
    return { city: 'Unknown', state: 'Unknown' }
  }
  if (location.includes(',')) {
    const parts = location.split(',')
    // parts[0] will be the first part, parts[1] will be the second part
    return {
      city: parts[0].trim(),
      state: parts[1].trim()
    }
  } else if (location.includes(' ')) {
    const parts = location.split(' ')
    return {
      city: parts[0].trim(),
      state: parts[1].trim()
    }
  }
  return { city: location.trim() }
}
