export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ message: 'This is a GET request from the API route.' });
  } else if (req.method === 'POST') {
    // Handle POST request
    res.status(200).json({ message: 'This is a POST request from the API route.' });
  } else {
    // Handle other HTTP methods
    res.status(404).json({ message: 'Not found' });
  }
}
