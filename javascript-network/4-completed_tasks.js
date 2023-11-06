const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Usage: node script_name.js [A URL]');
} else {
  request.get(apiUrl, { json: true }, (error, response, body) => {
    if (error) {
      console.error('Error fetching data from the URL:', error);
    } else if (response.statusCode !== 200) {
      console.error('Unexpected response status code:', response.statusCode);
    } else {
      const completedTasksByUser = {};

      body.forEach(task => {
        if (task.completed) {
          const userId = task.userId;
          completedTasksByUser[userId] = (completedTasksByUser[userId] || 0) + 1;
        }
      });

      console.log(completedTasksByUser);
    }
  });
}
