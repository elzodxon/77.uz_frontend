export async function fetchData(PerPage, currentPage) {
  try {
    const response = await fetch(
      `https://admin.77.uz/api/v1/store/list/ads/?page_size=${PerPage}&page=${currentPage}`,
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error.message)
    // You can handle the error here or rethrow it if needed
    throw error
  }
}
