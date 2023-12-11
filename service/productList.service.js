const baseUrl = 'https://api.example.com'

// Global configuration for fetch
const fetchConfig = {
  headers: {
    'Content-Type': 'application/json',

    // Add any other common headers here
  },
  
  // Add any other common options here
}

// Custom fetch function using the global configuration
async function customFetch(url, method = 'GET', data = null) {
  const mergedOptions = {
    ...fetchConfig,
    method: method,
  }

  // Add body for POST, PUT requests
  if (['POST', 'PUT'].includes(method)) {
    mergedOptions.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(`${baseUrl}${url}`, mergedOptions)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error:', error)
    throw error // Propagate the error for handling in the calling code
  }
}

// Example usage for GET
customFetch('/data').then((data) => {
  console.log('GET:', data)
})

// Example usage for POST
const postData = { key: 'value' }
customFetch('/create', 'POST', postData).then((data) => {
  console.log('POST:', data)
})

// Example usage for DELETE
customFetch('/delete/123', 'DELETE').then((data) => {
  console.log('DELETE:', data)
})

// Example usage for PUT
const putData = { key: 'updatedValue' }
customFetch('/update/123', 'PUT', putData).then((data) => {
  console.log('PUT:', data)
})
